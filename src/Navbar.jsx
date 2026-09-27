import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X, Home, Info, Phone, Briefcase } from "lucide-react";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "/", icon: Home },
    { name: "About", to: "/about", icon: Info },
    { name: "Contact", to: "/contact", icon: Phone },
    { name: "Service", to: "/service", icon: Briefcase },
  ];

  return (
    <nav className="top-0 z-50 bg-gray-100/80 border-b border-gray-200 sticky backdrop-blur-md">
      <div className="px-3 py-3 max-w-7xl mx-auto sm:px-4 lg:px-6">
        {/* Desktop + Tablet */}
        <div className="px-4 justify-between bg-white rounded-2xl shadow-md h-20 hidden md:flex items-center lg:px-6">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-red-500 lg:text-3xl tracking-wide hover:scale-105 transition-transform"
          >
            MyApp
          </Link>

          {/* Menu */}
          <ul className="flex items-center">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="flex-col justify-center w-20 h-20 overflow-hidden group relative flex items-center lg:w-24"
                  >
                    {/* Animated Top Line */}
                    <span className="top-0 h-1 w-full bg-red-500 absolute left-0 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />

                    {/* Icon */}
                    <Icon
                      size={24}
                      className="top-3 text-red-500 opacity-0 absolute -translate-y-8 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                    />

                    {/* Text */}
                    <span className="text-sm font-medium text-gray-700 lg:text-base transition-all duration-300 group-hover:translate-y-6 group-hover:opacity-0">
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Side */}
          <div className="gap-2 flex items-center lg:gap-3">
            {/* Search */}
            <div className="px-3 h-11 bg-gray-100 rounded-full border border-gray-200 flex items-center lg:px-4 focus-within:ring-2 focus-within:ring-red-400 transition">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="w-24 bg-transparent text-gray-800 text-sm ml-2 lg:w-36 xl:w-44 placeholder-gray-500 outline-none"
              />
            </div>

            {/* Login */}
            <Link
              to="/login"
              className="px-4 h-11 justify-center rounded-full bg-red-500 text-white font-semibold lg:px-6 flex items-center hover:bg-red-600 hover:scale-105 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="px-4 justify-between bg-white rounded-2xl shadow-md h-16 md:hidden flex items-center">
          <Link to="/" className="text-2xl font-extrabold text-red-500">
            MyApp
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-red-100 transition"
          >
            {isOpen ? (
              <X
                size={28}
                className="text-red-500 rotate-180 transition-transform duration-300"
              />
            ) : (
              <Menu
                size={28}
                className="text-red-500 hover:rotate-90 transition-transform duration-300"
              />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
}

export default Navbar;
