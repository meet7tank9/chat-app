import jwt from "jsonwebtoken";
import { asyncHandler } from "../utitlities/asyncHandler.utility.js";
import { errorHandler } from "../utitlities/errorHandler.utility.js";
import { User } from "../models/user.model.js";

export const authMiddleware = asyncHandler(async (req, res, next) => {
    const token = req.cookies?.token || req.headers["authorization"]?.split(" ")[1]

    if (!token) {
        return next(new errorHandler("Invalid Access or Token Expired! Please Login Again...", 400))
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(decoded?._id)

        if (!user) {
            return next(new errorHandler("Please login first", 400))
        }

        req.user = user
        next()
    } catch (error) {
        return next(new errorHandler("Invalid Access or Token Expired!", 400))
    }
})

