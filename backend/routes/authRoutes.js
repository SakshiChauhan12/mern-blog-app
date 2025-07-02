import express from "express";
import { register,login } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);


// Export the router to use in the main app 
export default authRouter;  