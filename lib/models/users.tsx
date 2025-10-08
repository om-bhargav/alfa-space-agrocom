import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone_no:{
        type: String,
        required:true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});



const User = mongoose.models.users ||  mongoose.model("users",UserSchema);

export default User;