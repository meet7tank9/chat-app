import express from "express"
import { getMessages, sendMessage } from "../controllers/message.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const router = express.Router()

router.post("/send-message/:receiverId", authMiddleware, sendMessage)
router.get("/get-messages/:otherParticipantId", authMiddleware, getMessages)

export default router