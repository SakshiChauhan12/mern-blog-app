import React from "react";
import { deleteBlog } from "../api"; // Adjust the import path as necessary

const BlogList = ({ blogs, onBlogChange, handleUpdate }) => {
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this blog?");
    if (!confirm) return;

    try {
      await deleteBlog(id);
      onBlogChange(); // Refresh list after deletion
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 Blog List</h2>

      {blogs.length === 0 ? (
        <p className="text-gray-500">No blogs available. Start by creating one!</p>
      ) : (
        blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
            <p className="text-gray-700 mb-4">{blog.content}</p>

            <div className="flex gap-4">
              <button
                onClick={() => handleUpdate(blog)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
              >
                📝 Edit
              </button>
              <button
                onClick={() => handleDelete(blog._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                ❌ Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;


//This uses () so the component returns the JSX directly — no need to write return.
// 🧠 Rule of Thumb:
// Use () for simple one-liner JSX returns ✅

// Use { return ... } when doing more logic or multiple lines inside the block ✅
