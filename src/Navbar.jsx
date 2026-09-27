import React from "react";
import { Home, User, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Profile", path: "/profile", icon: User },
  { name: "Settings", path: "/settings", icon: Settings },
];

function Navbar() {
  return (
    <nav className="gap-6 p-5 bg-pink-300 justify-between text-3xl flex items-center">
      <h1>MyApp</h1>
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            className="gap-4 flex items-center "
            key={item.name}
            to={item.path}
          >
            <Icon size={20} />
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
