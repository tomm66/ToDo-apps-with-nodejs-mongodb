const express = require("express")
const app= express()

const taskRoute =require("./routes/tasks")
const connectDB = require("./db/connect")
const {response} = require("express")
require("dotenv").config()

app.use(express.json())
app.use(express.static("./public"))
//check it 

const PORT =5000

app.use("/api/v1/tasks", taskRoute)

// connecting database
const start = async () => {
    try  { // awit for wating 
await connectDB(process.env.MONGO_URL)
// check process.env.PORT 
app.listen(process.env.PORT || PORT, console.log("Started a server"))
    }catch(err){
    console.log(err)
 }
}

start()

