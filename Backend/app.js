import express from "express"
import dotenv from "dotenv";
import dbConnect from "./DB/dbConfig.js";
import chalk from "chalk";
import cors from 'cors'
dotenv.config()
import router from "./Routes/routes.js";
const app = express()

 dbConnect()




app.use(cors())
app.use(express.json())
app.use('/api',router)

app.listen(process.env.PORT,()=>{
    console.log(chalk.yellowBright(`your server is running on ${process.env.PORT}`));
})