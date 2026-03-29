import express from "express"
import dbConnector from "./config/dbConnector.js"
import router from "./routes/allRoutes.js"
import cors from 'cors'
const app = express()

app.use(express.json())


const allowedOrigins = [
  "http://localhost:5173",
  "https://hubert-gomes.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (
      !origin ||
      allowedOrigins.includes(origin) ||
      origin.endsWith(".vercel.app")
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req , res) => {
    res.json({message : "The server is running!"})
})

app.use("/api" , router)

dbConnector()

app.listen(3000, () => {
    console.log("The server is running!");
})