import React from "react";

import { useState, useEffect } from "react";
import { getBlogs } from "../api";
import { deleteBlog } from "../api";
import { updateBlog } from "../api"; // Import the updateBlog function

// Adjust the import path as necessary

const BlogList = ({ blogs, onBlogChange, handleUpdate }) => {
  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!confirm) return;
    try {
      await deleteBlog(id);

      onBlogChange(); // Refresh list after deletion
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  return (
    <>
      <h2>📚 Blog List</h2>
      {blogs.map((blog) => (
        <div
          key={blog._id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <button
            style={{ marginRight: "10px" }}
            onClick={() => handleDelete(blog._id)}
          >
            {" "}
            ❌
          </button>
          <button
            style={{ marginRight: "10px" }}
            onClick={() => handleUpdate(blog)}
          >
            📝
          </button>
        </div>
      ))}
    </>
  );
};

export default BlogList;

//This uses () so the component returns the JSX directly — no need to write return.
// 🧠 Rule of Thumb:
// Use () for simple one-liner JSX returns ✅

// Use { return ... } when doing more logic or multiple lines inside the block ✅
