export default function ToolBar() {
  return (
    <div id="mainContent" class="flex-1 transition-all duration-300">
      <div class="toolbar bg-white p-4 rounded-t-lg shadow-sm mb-1">
        <div class="flex flex-wrap gap-2">
          <select id="fontSize" class="border rounded px-2 py-1">
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16" selected>
              16
            </option>
            <option value="18">18</option>
            <option value="20">20</option>
            <option value="24">24</option>
            <option value="28">28</option>
            <option value="32">32</option>
          </select>

          <button onclick="formatText('bold')" class="toolbar-btn">
            <i class="fas fa-bold"></i>
          </button>
          <button onclick="formatText('italic')" class="toolbar-btn">
            <i class="fas fa-italic"></i>
          </button>
          <button
            onclick="formatText('insertUnorderedList')"
            class="toolbar-btn"
          >
            <i class="fas fa-list-ul"></i>
          </button>
          <button onclick="alignText('left')" class="toolbar-btn">
            <i class="fas fa-align-left"></i>
          </button>
          <button onclick="alignText('center')" class="toolbar-btn">
            <i class="fas fa-align-center"></i>
          </button>
          <button onclick="alignText('right')" class="toolbar-btn">
            <i class="fas fa-align-right"></i>
          </button>
          <button
            onclick="addNewPage()"
            class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          >
            Add Page
          </button>
        </div>
      </div>

      <div id="pages-container">
        <div
          class="page bg-white shadow-lg mx-auto p-8 mb-8"
          contenteditable="true"
          data-page="1"
        >
          <h1 class="text-3xl font-bold mb-4">The Mountain's Secret</h1>
          <h2 class="text-xl font-semibold mb-4">Chapter 1: The Discovery</h2>
          <p class="mb-4">
            The crisp mountain air bit at Sarah's cheeks as she made her way up
            the narrow path. Twenty years of mountaineering experience had
            taught her to respect these heights, but nothing could have prepared
            her for what she was about to discover.
          </p>
          <p class="mb-4">
            The ancient map, found in her grandfather's attic, had led her to
            this remote corner of the Himalayas. Its weathered parchment spoke
            of a hidden monastery that held secrets dating back to the first
            explorers of these peaks.
          </p>
          <p>
            As she rounded the next bend, her breath caught in her throat.
            There, carved into the very face of the mountain, stood an entrance
            adorned with symbols she had never seen before in all her years of
            research.
          </p>
        </div>
      </div>
    </div>
  );
}
