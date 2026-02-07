import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"
import express from "express";
import connectDB from "./db/index.js";
const app = express();
import dotenv from "dotenv";
dotenv.config();

connectDB()

// (async ()=>{
//     try{
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("err : ",error);
//             throw error;
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.log("ERROR: ",error)
//     }
// })()