import React from "react";
import {createBlog} from "../api"; 
import { useState } from "react";
//why is this prop used
const CreateBlog=({onBlogCreated})=>{
    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!title || !content){
            alert("Please fill all the Fields");
            return;
        }
        try{
         await createBlog({title,content});
         setTitle("");
         setContent("");
         onBlogCreated(); // refresh blog list
        }
        catch(err){
            console.error("Error creating blog:", err);
        }

    }

    return(
     <div style={{ marginBottom: "20px" }}>
         <h2>✍️ Create a New Blog</h2>
         <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Blog Title"

            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            style={{ display: "block", marginBottom: "10px", width: "100%" }}

            />
            <textarea
            placeholder="Blog Content"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            rows="4"
              style={{ display: "block", marginBottom: "10px", width: "100%" }}
            >
            </textarea>
             <button type="submit">Create Blog</button>

         </form>

     </div>   

    );
}
export default CreateBlog;