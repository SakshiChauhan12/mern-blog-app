import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { isLoggedIn, logout } = useUser();
  const navigate = useNavigate();
  const handleLogout =()=>{
    logout();
    navigate("/");
  }

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
        {isLoggedIn ? (
          <button onClick={handleLogout} className="hover:text-yellow-300">
             Logout
          </button>
        ) : (
          <Link to="/login" className="hover:text-yellow-300">
             Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
