import { User } from "../models/user.model.js"
import { asyncHandler } from "../utitlities/asyncHandler.utility.js"
import { errorHandler } from "../utitlities/errorHandler.utility.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const register = asyncHandler(async (req, res, next) => {
    const { fullName, username, password, gender } = req.body

    if (!fullName || !username || !password || !gender) {
        return next(new errorHandler("All fields are required.", 400))
    }

    const userExists = await User.findOne({ username: username })

    if (userExists) {
        return next(new errorHandler("username already exits", 400))
    }

    const avatarType = gender == "male" ? "boy" : "girl"
    const avatar = `https://avatar.iran.liara.run/public/${avatarType}?username=${username}`

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({ fullName, username, password: hashedPassword, gender, avatar })
    await user.save()

    return res.status(201).json({
        success: true,
        responseData: {
            user
        }
    })
})

const login = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body

    if (!username || !password) {
        return next(new errorHandler("All fields are required.", 400))
    }

    const userExists = await User.findOne({ username: username })

    if (!userExists) {
        return next(new errorHandler("Username or password is invalid", 400))
    }

    const isCorrect = await bcrypt.compare(password, userExists.password)

    if (!isCorrect) {
        return next(new errorHandler("Username or password is invalid", 400))
    }

    const token = jwt.sign({
        _id: userExists?._id,
    }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })

    return res
        .status(200)
        .cookie("token", token,
            {
                expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: true,
                sameSite: 'None'
            }
        )
        .json({
            success: true,
            responseData: {
                userExists,
                token
            }
        })
})

const getUserProfile = asyncHandler(async (req, res, next) => {

    const user = await User.findById(req.user?._id)

    if (!user) {
        return next(new errorHandler("Please login first to get profile", 400))
    }

    return res
        .status(200)
        .json({
            success: true,
            responseData: {
                user
            }
        })
})

const logout = asyncHandler(async (req, res, next) => {
    return res.status(200)
        .cookie("token", "", {
            httpOnly: true,
            sameSite: "None",
            secure: true,
            expires: new Date(Date.now())
        })
        .json({
            success: true,
            message: "Logout successfully"
        })
})

const getOtherUser = asyncHandler(async (req, res, next) => {
    const users = await User.find({ _id: { $ne: req.user._id } })

    return res
        .status(200)
        .json({
            success: true,
            responseData: users
        })
})

export { register, login, getUserProfile, logout, getOtherUser }
