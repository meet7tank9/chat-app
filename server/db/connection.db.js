import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}chat-app`)
        if (connection) {
            console.log("Connected to database");
        }
    } catch (error) {
        console.log(error);
        console.log("something went wrong in datbase connection");
    }
}