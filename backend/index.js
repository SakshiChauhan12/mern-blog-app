//first file with basic express server
// step1--import necessary modules
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
// Importing the blog routes
import router from "./routes/blogRoutes.js";

//step2--configure dotenv to use environment variables
dotenv.config();

//step3--create an express application and set up middleware
const app=express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/blogs",router);

// Step 4: Define a simple route
app.get("/", (req, res) => {
    res.send("Welcome to the backend server!");
});

//step 5 --> Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>
{
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})


.catch((err) => console.error(err));



//complete route will be http://localhost:5000/api/blogs/