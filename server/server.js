require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const doctorRoutes = require("./routes/doctorRoutes")
const appointmentRoutes = require("./routes/appointmentRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/doctor" , doctorRoutes)
app.use("/appointment" , appointmentRoutes)

mongoose.connect(process.env.MONGO_URI ).then(()=> app.listen(8000, ()=> console.log("server is running"))).catch((error)=> console.log(error))