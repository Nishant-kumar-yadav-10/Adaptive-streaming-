import express,{Express} from "express"
import {PORT} from './config/sever.config.js'
import apiRoutes from "./routes/index.js"
import prismaConnection from "./config/database.js"
const app:Express=express()
app.use("/api",apiRoutes)
app.listen(PORT,async ()=>{
    console.log(`Server is Running on Port ${PORT}`)
    await prismaConnection()
    
})
