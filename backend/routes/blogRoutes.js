


import express from "express";
import Blog from "../models/blogModel.js"; // Import the Blog model



const router =express.Router();

// Create a new blog
//we use async await because when we deal with the database then the operations are asynchronous
router.post("/",async(req,res)=>{
    try{
        const{title,content}=req.body;
        const newBlog=new Blog({title,content});
        const savedBlog=await newBlog.save();
        res.status(201).json(savedBlog);

    }
    catch(err){
        //500--> internal server error
        //and json is sending object
        res.status(500).json({error:"Failed to create blog"});

    }
});




// Get all blogs

router.get("/",async(req,res)=>{
    try{
        //this line fetches all blogs from the database and sorts them by createdAt in descending order means newest first
        const blogs=await Blog.find().sort({createdAt:-1}); 
        res.json(blogs);


    }
    catch(err){
         res.status(500).json({ error: "Failed to fetch blogs" });

    }
});


// Get a single blog by ID
router.get("/:id",async(req,res)=>{
    try{
        const blog=await Blog.findById(req.params.id);
        if(!blog) return res.status(404).json({error:"Blog not found"});
        res.json(blog);


    }
    catch(err){
        res.status(500).json({ error: "Failed to fetch blog" });

    }
});




// Update a blog

router.put("/:id",async(req,res)=>{
    try{
        const {title,content}=req.body;
        const updatedBlog= await Blog.findByIdAndUpdate(req.params.id,{
            title,
            content
        },{new:true}); //new:true returns the updated document

        res.json(updatedBlog);
        }

    
    catch(err){
        res.status(500).json({ error: "Failed to update blog" });   
    }
})


// Delete a blog

router.delete("/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete blog" });
  }
});

export default router;
