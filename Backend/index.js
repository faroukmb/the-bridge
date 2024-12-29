
import express from "express"
import cors from "cors"
import "dotenv/config";
import connectDB from "./config/connectDB.js"
import connectCloudinary from "./config/cloudinary.js";

import courseRouter from "./Routes/courseRouter.js";
const app = express()

connectDB()
connectCloudinary()

app.use(cors())
app.use(express.json())

app.use("/api/courses",courseRouter)
app.get("/",(req,res)=>{
    res.send("api working")
    
})

const port = process.env.PORT 
app.listen(port,()=> console.log("server active in port " +port)
)