import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="p-4 bg-gray-800">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/tutorial" className="text-white hover:text-gray-400">
              Tutorial
            </a>
          </li>
          <li>
            <a href="/footer" className="text-white hover:text-gray-400">
              Footer
            </a>
          </li>
          <li>
            <a
              href="/classcomponent"
              className="text-white hover:text-gray-400"
            >
              Class Component
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
