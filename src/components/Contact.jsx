export default function Contact() {
  return (
    <>
      <div id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-gray-400">
              Connect with us through any of these platforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-envelope w-8 text-blue-400"></i>
                <a href="mailto:contact@writex.com" className="hover:text-blue-400">
                  contact@writex.com
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone w-8 text-blue-400"></i>
                <a href="tel:+1234567890" className="hover:text-blue-400">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt w-8 text-blue-400"></i>
                <span>123 Writing Street, Editor City, WX 12345</span>
              </div>
            </div>{" "}
            <div className="flex justify-center md:justify-end space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-black transition-colors"
                aria-label="TikTok"
              >
                <i className="fab fa-tiktok text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-800 transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
