import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1 - Logo / Brand */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">My Blog App</h3>
          <p className="text-sm">
            A place to share your thoughts, stories, and ideas.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/blogs" className="hover:underline">View Blogs</a></li>
            <li><a href="/create" className="hover:underline">Create Blog</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact / Info */}
        <div>
          <h4 className="text-md font-semibold mb-2">Contact</h4>
          <p className="text-sm">Email: support@myblogapp.com</p>
          <p className="text-sm">© {new Date().getFullYear()} My Blog App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
