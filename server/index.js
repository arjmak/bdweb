import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import cookieParser from "cookie-parser"
import './db.js'
import { AdminRouter } from "./routes/auth.js"
import { ReviewerRouter } from "./routes/reviewer.js"
const app = express()
app.use(express.json())
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))
app.use(cookieParser())
dotenv.config()
app.use('/auth', AdminRouter)
app.use('/reviewer', ReviewerRouter)

app.listen(process.env.PORT, () => {
    console.log("Serve is Running");
})