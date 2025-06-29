// 1. Importing the axios library to make HTTP requests
import axios from "axios";

// 2. Creating an Axios instance with a base URL
// This means you don't have to write the full URL again and again in every API call.
const API = axios.create({
    baseURL: "http://localhost:5000/api/blogs" // All requests will start with this URL
});

// 3. Function to get all blogs from the server
// It sends a GET request to http://localhost:5000/api/blogs/
export const getBlogs = () => API.get("/");

// 4. Function to get a single blog by its ID
// It sends a GET request to http://localhost:5000/api/blogs/{id}
export const getBlogById = (id) => API.get(`/${id}`);

// 5. Function to create a new blog post
// It sends a POST request with blog data to http://localhost:5000/api/blogs/
export const createBlog = (newBlog) => API.post("/", newBlog);

// 6. Function to update an existing blog post by ID
// It sends a PUT request with updated data to http://localhost:5000/api/blogs/{id}
export const updateBlog = (id, updatedBlog) => API.put(`/${id}`, updatedBlog);

// 7. Function to delete a blog by its ID
// It sends a DELETE request to http://localhost:5000/api/blogs/{id}
export const deleteBlog = (id) => API.delete(`/${id}`);
