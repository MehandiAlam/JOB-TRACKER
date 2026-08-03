import express from "express";
import Connectdb from "./Db.js";
import dotenv from "dotenv";
import Userrouter from "./Routes/Userrouter.js";
import cors from "cors";
import Jobrouter from "./Routes/Jobrouter.js";

dotenv.config();
const app=express();
app.use(cors());

app.use(express.json())

Connectdb();

app.use("/user",Userrouter)
app.use("/job",Jobrouter)

app.get("/",(req,res)=>{
    res.json({
        message : "connected dawg"
    })
})

app.listen(5000,()=>{
    console.log("Server is running Dawg ");
});

