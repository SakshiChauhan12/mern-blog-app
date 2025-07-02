import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
},{
    timestamps:true // Automatically manage createdAt and updatedAt fields
});

const User=new mongoose.model('User',userSchema);
export default User;