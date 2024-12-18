import mongoose from  "mongoose";
import dotenv from "dotenv";
import chalk from "chalk";
dotenv.config()
const dbConnect = async() =>{
    try {
       const connection  = await mongoose.connect(process.env.MONGODB_URI)
       console.log(chalk.blue("database connected successfully "));
    } catch (error) {
        console.log(error);
    }
}

export default dbConnect