"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0c2625]/95 backdrop-blur-md border-b border-[#d4af37]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-[#0c2625] rounded transform rotate-45"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Estate Advisor</h1>
              <p className="text-xs text-[#d4af37] -mt-1">Karachi Properties</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#properties"
              className="text-white/80 hover:text-[#d4af37] transition-colors"
            >
              Properties
            </a>
            <a
              href="#services"
              className="text-white/80 hover:text-[#d4af37] transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-[#d4af37] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-[#d4af37] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white/80">
              <Phone size={16} />
              <span className="text-sm">+92 321 123 4567</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2 text-[#d4af37]">
              <MapPin size={16} />
              <span className="text-sm">Karachi</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 mt-4">
              <a
                href="#properties"
                className="text-white/80 hover:text-[#d4af37] transition-colors"
              >
                Properties
              </a>
              <a
                href="#services"
                className="text-white/80 hover:text-[#d4af37] transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-white/80 hover:text-[#d4af37] transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-white/80 hover:text-[#d4af37] transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
