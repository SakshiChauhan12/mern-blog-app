import React from "react";

const CreateBlog = ({
  title,
  setTitle,
  content,
  setContent,
  handleSubmit,
  editBlog,
}) => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        {editBlog ? "✏️ Update Blog" : "✍️ Create a New Blog"}
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />

        {/* Content Textarea */}
        <textarea
          placeholder="Write your blog content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="6"
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-all"
        >
          {editBlog ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
