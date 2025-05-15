import express from "express"
import "dotenv/config"
import userRoute from "./routes/user.route.js"
import { connectDB } from "./db/connection.db.js"
import { errorMiddleware } from "./middlewares/error.middleware.js"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(errorMiddleware)

app.use("/api/v1/user", userRoute)
connectDB()

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started at ${process.env.PORT}`);
})