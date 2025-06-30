import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo/Brand */}
      <div className="text-2xl font-bold text-yellow-100">
        My Blog App
      </div>

      {/* Nav Links */}
      <div className="space-x-6 text-base font-medium text-yellow-100">
        <Link
          to="/"
          className="hover:text-white hover:underline transition duration-200"
        >
          Home
        </Link>
        <Link
          to="/blogs"
          className="hover:text-white hover:underline transition duration-200"
        >
          View Blogs
        </Link>
        <Link
          to="/create"
          className="hover:text-white hover:underline transition duration-200"
        >
          Create Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
