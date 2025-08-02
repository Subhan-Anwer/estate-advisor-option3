"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0c2625] to-[#051413] relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-[#0c2625] rounded transform rotate-45"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Estate Advisor</h3>
                <p className="text-xs text-[#d4af37] -mt-1">
                  Karachi Properties
                </p>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Pakistan's most trusted real estate consultancy, helping clients
              make smarter property decisions in Karachi since 2012.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-[#1877f2] hover:text-white transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-[#f58529] hover:to-[#dd2a7b] transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-[#0077b5] transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-[#ff0000] transition-all duration-300"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#properties"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  Property Buying
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  Property Selling
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  Investment Consulting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  Property Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  Legal Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  Valuation Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70">Office # 123, DHA Phase 6</p>
                  <p className="text-white/70">Karachi, Pakistan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <p className="text-white/70">+92 321 123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <p className="text-white/70">info@estateadvisor.pk</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h5 className="text-white font-medium mb-3">Newsletter</h5>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#d4af37]"
                />
                <button className="bg-[#d4af37] text-[#0c2625] px-4 py-2 rounded-lg hover:bg-[#b8941f] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 Estate Advisor. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#d4af37] text-[#0c2625] rounded-full flex items-center justify-center hover:bg-[#b8941f] transition-all duration-300 transform hover:scale-110 shadow-lg z-50"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
