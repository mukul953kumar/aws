import express from "express"
import dotenv from "dotenv"
dotenv.config()

const PORT = 5000
const app = express()

app.get("/health",(req,res)=>{
    return res.status(200).json({msg:"All is Good"})
})
app.get("/",(req,res)=>{
    return res.status(200).json({msg:"Hello Mukul"})
})

app.listen(PORT,()=>{
    console.log(`server started ${PORT}`)
})