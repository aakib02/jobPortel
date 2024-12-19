import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
Name:{
    type:String
},
Email:{
    type:String
},
Password:{
    type:String
},
Role:{
    type:String,
    enum:['jobseeker','recruiter','admin'],
    default:'jobseeker'
},
jobseeker:{
    education:[{
        degree:{
            type:String
        },
        institution:{
            type:String
        },
        year:{
            type:String
        },
    }],
    experience:[{
        company:{
            type:String
        },
        role:{
            type:String
        },
        duration:{
            type:String
        },
  
    }],
    skill:{
        type:[String]
    },
    resume:{
        type:String
    }
},
recruiter:{
    companyName:{
        type:String
    },
    companyWebsite:{
        type:String
    },
   
    permission:[String],
    default:['job-post','view-application','manage-job']
},
admin:{
    permission:[String],
    default:['manage-jobseeker']

}



})

export default mongoose.model("jobUser",userSchema)