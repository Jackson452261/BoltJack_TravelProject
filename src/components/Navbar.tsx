import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-sky-600">
                Kevin
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-900 hover:text-sky-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                首頁
              </Link>
              <Link
                to="/blog"
                className="text-gray-500 hover:text-sky-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                文章
              </Link>
              <Link
                to="/contact"
                className="text-gray-500 hover:text-sky-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                聯絡
              </Link>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-50 border border-gray-300 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              to="/"
              className="text-gray-900 block px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <a
              href="#"
              className="text-gray-500 block px-3 py-2 text-base font-medium"
            >
              Destinations
            </a>
            <a
              href="#"
              className="text-gray-500 block px-3 py-2 text-base font-medium"
            >
              Travel Tips
            </a>
            <a
              href="#"
              className="text-gray-500 block px-3 py-2 text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-500 block px-3 py-2 text-base font-medium"
            >
              Contact
            </a>
            <div className="px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
