import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-16">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div className="animate-heading">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Share Ideas. Tell Stories. Build Your Voice.
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Welcome to your own blogging space where your words matter. Start creating and join a world full of ideas.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/create">
              <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition">
                ✍️ Start Blogging
              </button>
            </Link>
            <Link to="/blogs">
              <button className="border border-gray-800 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 transition">
                📚 Explore Blogs
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="animate-image fadeInRight">
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
            alt="Writing illustration"
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
