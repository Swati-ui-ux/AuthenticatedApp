const express = require("express")
const dovenv = require("dotenv").config()
const app = express()
const cors = require("cors")
const PORT = 8000

require("./config/db")

const authRoutes = require("./routes/authRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes")

app.use(cors())
app.use(express.json())
app.use("/api", authRoutes)
app.use("/api/auth", authRoutes)
app.use("/api",dashboardRoutes)
app.get("/", (req,res) => {
    res.send("Backend running in get req")
    
})


app.listen(PORT,()=>console.log("Server is running 8000"))