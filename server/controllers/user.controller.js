import { User } from "../models/user.model.js"
import { asyncHandler } from "../utitlities/asyncHandler.utility.js"
import { errorHandler } from "../utitlities/errorHandler.utility.js"
import bcrypt from "bcryptjs"

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
        data: {
            user
        }
    })
})

const login = (req, res) => {
    res.send("login controller")
}

export { register, login }