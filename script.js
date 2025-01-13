// Smooth scroll function (in global scope)
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  if (!targetElement) return;

  const targetPosition =
    targetElement.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Initialize the editor
document.addEventListener("DOMContentLoaded", function () {
  const fontSize = document.getElementById("fontSize");
  fontSize.addEventListener("change", function () {
    document.execCommand("fontSize", false, "7");
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const span = selection.getRangeAt(0).commonAncestorContainer.parentNode;
    span.style.fontSize = this.value + "px";
  });

  // Add mutation observer to monitor content changes
  const pagesContainer = document.getElementById("pages-container");
  const config = { childList: true, subtree: true, characterData: true };

  const observer = new MutationObserver(() => {
    const pages = document.querySelectorAll(".page");
    const currentPage = pages[pages.length - 1];

    if (currentPage && isPageFull(currentPage)) {
      const nextContent = extractOverflowContent(currentPage);
      if (nextContent) {
        addNewPage(nextContent);
      }
    }
  });

  observer.observe(pagesContainer, config);

  // Initialize thumbnails for the first page
  updateThumbnails();
  showPage(1);

  // Add sidebar toggle functionality
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  const toggleButton = document.getElementById("toggleSidebar");
  const chevronIcon = toggleButton.querySelector(".fa-chevron-left");

  toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    mainContent.classList.toggle("full-width");

    // Save sidebar state to localStorage
    localStorage.setItem(
      "sidebarCollapsed",
      sidebar.classList.contains("collapsed")
    );
  });

  // Restore sidebar state on page load
  const sidebarCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
  if (sidebarCollapsed) {
    sidebar.classList.add("collapsed");
    mainContent.classList.add("full-width");
  }

  // Add smooth scroll to contact links
  const contactLinks = document.querySelectorAll('a[href*="#contact"]');
  contactLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href === "#contact") {
        // Same page navigation
        smoothScroll("#contact", 1000);
      } else {
        // Cross-page navigation
        window.location.href = href;
      }
    });
  });

  // Handle new project form submission
  const newProjectForm = document.getElementById("newProjectForm");
  if (newProjectForm) {
    newProjectForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const projectData = {
        title: document.getElementById("projectTitle").value,
        topic: document.getElementById("projectTopic").value,
        description: document.getElementById("projectDescription").value,
        dateCreated: new Date().toISOString(),
        content: "",
        image: getTopicImage(document.getElementById("projectTopic").value),
      };

      // Store project data
      const projects = JSON.parse(localStorage.getItem("projects") || "[]");
      projects.push(projectData);
      localStorage.setItem("projects", JSON.stringify(projects));

      // Create new project page
      createNewProject(projectData);
    });
  }
});

// Check if page is full
function isPageFull(page) {
  // A4 height in pixels (297mm at 96 DPI)
  const maxHeight = 1122.52; // 297mm converted to pixels
  return page.scrollHeight > maxHeight;
}

// Extract overflow content
function extractOverflowContent(page) {
  const range = document.createRange();
  range.selectNodeContents(page);

  const clientRect = range.getBoundingClientRect();
  const pageHeight = 1122.52; // A4 height in pixels

  if (clientRect.height <= pageHeight) {
    return null;
  }

  let overflow = "";
  const walker = document.createTreeWalker(
    page,
    NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT,
    null,
    false
  );

  let currentNode = walker.currentNode;
  let currentHeight = 0;
  let foundOverflow = false;

  while (currentNode) {
    const nodeRect = currentNode.getBoundingClientRect?.();
    if (nodeRect) {
      if (nodeRect.top - page.getBoundingClientRect().top > pageHeight) {
        if (currentNode.textContent) {
          overflow += currentNode.textContent;
        }
        currentNode.remove();
        foundOverflow = true;
      }
    }
    currentNode = walker.nextNode();
  }

  return foundOverflow ? overflow : null;
}

// Modified addNewPage function
function addNewPage(content = "") {
  const pagesContainer = document.getElementById("pages-container");
  const newPage = document.createElement("div");
  const pageNumber = pagesContainer.children.length + 1;

  newPage.className = "page bg-white shadow-lg mx-auto p-8 mb-8";
  newPage.contentEditable = true;
  newPage.setAttribute("data-page", pageNumber);

  if (content) {
    newPage.textContent = content;
  }

  pagesContainer.appendChild(newPage);
  updateThumbnails();
  showPage(pageNumber);
  newPage.focus();
}

// Format text function
function formatText(command) {
  document.execCommand(command, false, null);
  const button = event.currentTarget;
  button.classList.toggle("active");
}

// Align text function
function alignText(alignment) {
  document.execCommand(
    "justify" + alignment.charAt(0).toUpperCase() + alignment.slice(1),
    false,
    null
  );
}

// Handle paste to remove formatting
document.addEventListener("paste", function (e) {
  e.preventDefault();
  const text = e.clipboardData.getData("text/plain");
  document.execCommand("insertText", false, text);
});

// Function to update thumbnails
function updateThumbnails() {
  const thumbnailsContainer = document.getElementById("page-thumbnails");
  const pages = document.querySelectorAll(".page");
  thumbnailsContainer.innerHTML = "";

  pages.forEach((page, index) => {
    const thumbnail = document.createElement("div");
    thumbnail.className = "page-thumbnail mb-3";
    thumbnail.setAttribute("data-page", index + 1);

    // Create preview content
    const preview = document.createElement("div");
    preview.className = "p-1 text-[6px] overflow-hidden h-full";
    preview.textContent = page.textContent.substring(0, 100); // Show first 100 characters
    thumbnail.appendChild(preview);

    // Add page number
    const pageNumber = document.createElement("div");
    pageNumber.className = "page-number text-[8px]"; // Reduce font size
    pageNumber.textContent = `Page ${index + 1}`;
    thumbnail.appendChild(pageNumber);

    // Add click event to show corresponding page
    thumbnail.addEventListener("click", () => {
      showPage(index + 1);
    });

    thumbnailsContainer.appendChild(thumbnail);
  });

  updateActiveThumbnail();
}

// Function to show specific page
function showPage(pageNumber) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page, index) => {
    if (index + 1 === pageNumber) {
      page.classList.remove("hidden");
      page.scrollIntoView({ behavior: "smooth" });
    } else {
      page.classList.add("hidden");
    }
  });
  updateActiveThumbnail();
}

// Function to update active thumbnail
function updateActiveThumbnail() {
  const thumbnails = document.querySelectorAll(".page-thumbnail");
  const visiblePage = document.querySelector(".page:not(.hidden)");
  const visiblePageNumber = visiblePage
    ? parseInt(visiblePage.getAttribute("data-page"))
    : 1;

  thumbnails.forEach((thumbnail) => {
    const thumbnailPage = parseInt(thumbnail.getAttribute("data-page"));
    if (thumbnailPage === visiblePageNumber) {
      thumbnail.classList.add("active");
    } else {
      thumbnail.classList.remove("active");
    }
  });
}

// Project creation functions
function openNewProjectModal() {
  const modal = document.getElementById("newProjectModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeNewProjectModal() {
  const modal = document.getElementById("newProjectModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function getTopicImage(topic) {
  const images = {
    adventure: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    mystery: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d",
    scifi: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    fantasy: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    historical: "https://images.unsplash.com/photo-1564661586858-4c60be4dc0ea",
    other: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
  };
  return images[topic] || images.other;
}

function createNewProject(projectData) {
  // Create a unique URL-friendly ID for the project
  const projectId = `project-${Date.now()}`;

  // Create project HTML content
  const projectHTML = generateProjectHTML(projectData, projectId);

  // Save the HTML content
  localStorage.setItem(`project_${projectId}`, projectHTML);

  // Redirect to the new project
  window.location.href = `project.html?id=${projectId}`;
}

function generateProjectHTML(projectData, projectId) {
  return `
    <div class="page bg-white shadow-lg mx-auto p-8 mb-8" contenteditable="true" data-page="1">
      <h1 class="text-3xl font-bold mb-4">${projectData.title}</h1>
      <p class="text-gray-600 mb-4">${projectData.description}</p>
      <div class="content"></div>
    </div>
  `;
}
