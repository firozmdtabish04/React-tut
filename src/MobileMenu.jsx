import React from "react";
import { Link } from "react-router-dom";
import { Search, Home, Info, Phone, Briefcase, LogIn } from "lucide-react";

function MobileMenu({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  const menuItems = [
    { name: "Home", to: "/", icon: Home },
    { name: "About", to: "/about", icon: Info },
    { name: "Contact", to: "/contact", icon: Phone },
    { name: "Service", to: "/service", icon: Briefcase },
  ];

  return (
    <div className="mt-3 bg-white rounded-2xl shadow-xl overflow-hidden md:hidden animate-in slide-in-from-top duration-300">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.name}
            to={item.to}
            onClick={() => setIsOpen(false)}
            className="gap-3 px-5 py-4 text-gray-700 border-b border-gray-100 flex items-center hover:bg-red-50 hover:text-red-500 transition"
          >
            <Icon size={22} />
            <span className="font-medium">{item.name}</span>
          </Link>
        );
      })}

      <div className="p-4 space-y-3">
        <div className="px-4 py-3 bg-gray-100 rounded-full border border-gray-200 flex items-center">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-gray-700 ml-2 outline-none"
          />
        </div>

        <Link
          to="/login"
          onClick={() => setIsOpen(false)}
          className="gap-2 py-3 justify-center bg-red-500 text-white rounded-full font-semibold flex items-center hover:bg-red-600 transition"
        >
          <LogIn size={18} />
          Login
        </Link>
      </div>
    </div>
  );
}

export default MobileMenu;
