import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type:String
    },
    companyName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    location:{
        type:String
    },
    employment:{
        type:String,
        enum:['Part-time','Full-time','Contract',"Internship"]
    },
    jobDescription:{
        type:String
    },
    requirement:{
        type:[String]
    },
    email:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    isActive:{
        type:Boolean,
        default:true
    }
})

export default mongoose.model('job',jobSchema)