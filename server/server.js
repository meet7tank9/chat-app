import { app, server } from "./socket/socket.js"
import express from "express"
import "dotenv/config"
import userRoute from "./routes/user.route.js"
import messageRoute from "./routes/message.route.js"
import { connectDB } from "./db/connection.db.js"
import cookieParser from "cookie-parser"
import { errorMiddleware } from "./middlewares/error.middleware.js"
import cors from "cors"

// const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/user", userRoute)
app.use("/api/v1/message", messageRoute)

app.use(errorMiddleware)

connectDB()

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server started at ${process.env.PORT}`);
})