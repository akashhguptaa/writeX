// src/pages/About.js
import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar background = "bg-slate-900" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a"
              alt="Writing Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl text-white font-bold text-center">
                About WriteX
              </h1>
            </div>
          </div>

          {/* Content Sections */}
          <div className="p-8 space-y-8">
            {/* Mission Statement */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700">
                WriteX is dedicated to providing writers with a powerful,
                intuitive platform for creating and organizing their written work.
                We believe in making the writing process as seamless and enjoyable
                as possible, allowing creativity to flow without technical
                barriers.
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    <i className="fas fa-pen-fancy text-blue-600 mr-2"></i>
                    Professional Writing Environment
                  </h3>
                  <p className="text-gray-700">
                    A clean, distraction-free interface designed specifically for
                    writing.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    <i className="fas fa-folder-open text-blue-600 mr-2"></i>
                    Project Organization
                  </h3>
                  <p className="text-gray-700">
                    Keep your writing projects organized and easily accessible.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    <i className="fas fa-cloud text-blue-600 mr-2"></i>
                    Automatic Saving
                  </h3>
                  <p className="text-gray-700">
                    Never lose your work with our automatic saving feature.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    <i className="fas fa-tools text-blue-600 mr-2"></i>
                    Rich Formatting Tools
                  </h3>
                  <p className="text-gray-700">
                    Format your text exactly how you want it with our
                    comprehensive toolkit.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Choose Us */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose WriteX?
              </h2>
              <p className="text-lg text-gray-700">
                WriteX combines simplicity with power, offering a writing platform
                that's both easy to use and feature-rich. Whether you're writing a
                novel, a blog post, or academic content, our platform adapts to
                your needs. With features like multi-page support, real-time
                previews, and customizable formatting options, WriteX is the
                perfect companion for writers of all levels.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;