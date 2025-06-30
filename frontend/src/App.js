import "./App.css";
import BlogList from "./components/BlogList";
import { useState, useEffect } from "react";
import { getBlogs } from "./api";
import CreateBlog from "./components/CreateBlog";
import { createBlog } from "./api";
import { updateBlog } from "./api"; // Import the updateBlog function
// Import the createBlog function
// Import the CreateBlog component
// Adjust the import path as necessary

function App() {
  const [blogs, setBlogs] = useState([]);
  //creating a state for editing
  const [editBlog, setEditBlog] = useState(null);

  const fetchBlogs = () => {
    getBlogs()
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  };
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Please fill all the Fields");
      return;
    }
    try {
      if (editBlog) {
        await updateBlog(editBlog._id, { title, content });
      } else {
        await createBlog({ title, content });
      }

      setTitle("");
      setContent("");
      fetchBlogs(); // refresh blog list
    } catch (err) {
      console.error("Error creating blog:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  console.log("Blogs:", blogs);

  return (
    <div className="App">
      <h1>📝 Blog App</h1>
      <BlogList
        blogs={blogs}
        onBlogChange={fetchBlogs}
        handleUpdate={(blog) => {
          setEditBlog(blog);
          setTitle(blog.title);
          setContent(blog.content);
        }}
      />
      <CreateBlog
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        handleSubmit={handleSubmit}
        editBlog={editBlog}
      />
    </div>
  );
}

export default App;
