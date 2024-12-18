import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
Name:{
    type:String
},



})

export default mongoose.model("jobUser",userSchema)