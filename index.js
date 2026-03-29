import express from "express"
import dbConnector from "./config/dbConnector.js"
import router from "./routes/allRoutes.js"
import cors from 'cors'
const app = express()

app.use(express.json())

app.use(cors({
    origin : ["http://localhost:5173" , "https://hubert-gomes.vercel.app"]
}))

app.get("/", (req , res) => {
    res.json({message : "The server is running!"})
})

app.use("/api" , router)

dbConnector()

app.listen(3000, () => {
    console.log("The server is running!");
})