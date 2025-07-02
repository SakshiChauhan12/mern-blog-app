import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


export const register=async(req,res)=>{
    try{
//we want to extract the data from the request body
const{name,email,password}=req.body;

//check if the use already exists
const existingUser=await User.findOne({email});
if(existingUser){
    return res.status(400).json({error:"User already exists"});

    }
    //now we know that the user is new so our task is to secure the password given by user
    //we used bcrypt to hash the password
    //bcrypt.hash takes two arguments, the password and the salt rounds (10 is a good default)

    const hashedPassword=await bcrypt.hash(password,10);
    //now we create a new user
    const newUser=await User.create({
        name,
        email,
        password:hashedPassword, //store the hashed password
    });
    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
}
    catch(err){
        res.status(500).json({error:"registration failed"});

    }


}

export const login=async(req,res)=>{
try
{
const{email,password}=req.body;
//check if the user exists
const user=await User.findOne({email});
if(!user){
    return res.status(400).json({error:"User does not exist"});
}
//now we know that the user exists so we will match the password
const isMatch=await bcrypt.compare(password,user.password);
if(!isMatch)
    return res.status(400).json({error:"Invalid credentials"});
// now we know that the password also matches 
// we will create a token for the user
//we create token using jwt.sign method
//we create it because we want to authenticate the user in the future
//we pass the user id and a secret key to the jwt.sign method
//the secret key is stored in the .env file
//we also set the expiration time of the token to 1 hour/7 d
const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});

//we send the token to the client
res.status(200).json({
    message:"Login Successful",
    token,
    user:{
        id:user._id,
        name:user.name,
    }
})




}
catch(err){
    res.status(500).json({error:"login failed"});

}
}
