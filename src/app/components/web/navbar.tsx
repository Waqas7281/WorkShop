"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Developer", href: "/developer" },
  ];

  return (
    <nav className="bg-orange-700 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:justify-center">
          {/* Logo - Only visible on small screens */}
          <div className="flex-shrink-0 lg:hidden">
            <a href="/" className="flex items-center">
              <div className="bg-white rounded-lg p-2 shadow-md">
                <span className="text-orange-700 text-2xl font-bold">MB</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Centered on large screens */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-white px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 hover:bg-orange-600 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-700 rounded-lg p-2 transition-transform duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-orange-800 transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-white hover:bg-orange-600 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2"
              onClick={() => setIsOpen(false)}
              style={{
                animation: isOpen
                  ? `slideIn 0.3s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
