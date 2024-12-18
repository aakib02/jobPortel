import express from "express"
import dotenv from "dotenv";
import dbConnect from "./DB/dbConfig.js";
import chalk from "chalk";
dotenv.config()
const app = express()

 dbConnect()





 


app.listen(process.env.PORT,()=>{
    console.log(chalk.yellowBright(`your server is running on ${process.env.PORT}`));
})