import React from "react";

import { useState, useEffect } from "react";
import { getBlogs } from "../api"; // Adjust the import path as necessary

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs()
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);
  console.log(blogs);

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