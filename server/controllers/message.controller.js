import { User } from "../models/user.model.js"
import { Message } from "../models/message.model.js"
import { Conversation } from "../models/conversation.model.js"
import { asyncHandler } from "../utitlities/asyncHandler.utility.js"
import { errorHandler } from "../utitlities/errorHandler.utility.js"

const sendMessage = asyncHandler(async (req, res, next) => {
    const senderId = req.user._id

    const { receiverId } = req.params

    const { message } = req.body

    if (!senderId || !receiverId || !message) {
        return next(new errorHandler("All Fields are required", 400))
    }

    let conversation = await Conversation.findOne({ participants: { $all: [senderId, receiverId] } })

    if (!conversation) {
        conversation = await Conversation.create({
            participants: [senderId, receiverId]
        })
    }

    const newMessage = await Message.create({ message: message, sender: senderId, receiver: receiverId })

    if (newMessage) {
        conversation.messages.push(newMessage._id)
        await conversation.save()
    }

    res.status(200).json({
        success: true,
        responseData: newMessage
    })
})

const getMessages = asyncHandler(async (req, res, next) => {
    const myId = req.user._id
    const { otherParticipantId } = req.params

    if (!myId || !otherParticipantId) {
        return next(new errorHandler("All Fields are required", 400))
    }

    const con = await Conversation.find({ participants: { $all: [myId, otherParticipantId] } }).populate(
        { path: "messages" })

    res.status(200).json({
        success: true,
        responseData: con
    })
})

export { sendMessage, getMessages }