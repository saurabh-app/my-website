import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-8 px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
            <p className="text-sm">
              We provide the best solutions for your business with innovative and modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#web-design" className="hover:text-blue-400">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#development" className="hover:text-blue-400">
                  Development
                </a>
              </li>
              <li>
                <a href="#seo" className="hover:text-blue-400">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@example.com</li>
              <li>Phone: +123 456 789</li>
              <li>Address: 123 Business St, City, Country</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          <p>&copy; {new Date().getFullYear()} MyCompany. All Rights Reserved.</p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li>
              <a href="#privacy" className="hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-blue-400">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
