import "./App.css";
import BlogList from "./components/BlogList";
import { useState, useEffect } from "react";
import { getBlogs } from "./api"; 
import CreateBlog from "./components/CreateBlog"; // Import the CreateBlog component
// Adjust the import path as necessary

function App() {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs=()=>{
     getBlogs()
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));

  }

  useEffect(() => {
    fetchBlogs();
   
  }, []);
  
  return (
    <div className="App">
      <h1>📝 Blog App</h1>
      <BlogList blogs={blogs} />
      <CreateBlog onBlogCreated={fetchBlogs} />
    </div>
  );
}

export default App;
