import React from "react";
import { createBlog } from "../api";
import { useState } from "react";
//why is this prop used
const CreateBlog = ({
  title,
  setTitle,
  content,
  setContent,
  handleSubmit,
  editBlog,
}) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>✍️ Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <textarea
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="4"
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        ></textarea>
        <button type="submit">{editBlog ? "Update" : "CREATE"}</button>
      </form>
    </div>
  );
};
export default CreateBlog;
