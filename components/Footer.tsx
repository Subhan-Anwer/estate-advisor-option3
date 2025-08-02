"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";
import Image from "next/image";

const Footer = () => {

  return (
    <footer className="bg-gradient-to-b from-[#111111] to-[#000000] relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/logo.png"
                alt="Logo"
                className="w-18 h-auto text-black"
                height={58}
                width={58}
                quality={100}
              />
              <div>
                <h3 className="text-xl font-bold text-white">Estate Advisor</h3>
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
                  href="#contact"
                  className="text-white/70 hover:text-[#d4af37] transition-colors"
                >
                  Home
                </a>
              </li>
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
                  Property Documentation
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
                  <p className="text-white/70">
                    Shahbaz Comm lane 4, DHA Phase VI, Karachi
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <p className="text-white/70">+92 323 3385541</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <p className="text-white/70">sohailadvisor90@gmail.com</p>
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
    </footer>
  );
};

export default Footer;
