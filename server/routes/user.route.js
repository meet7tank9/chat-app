import express from "express"
import { register, login, getUserProfile, logout, getOtherUser } from "../controllers/user.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.get("/get-profile", authMiddleware, getUserProfile)
router.get("/get-other-users", authMiddleware, getOtherUser)
router.post("/logout", logout)

export default router