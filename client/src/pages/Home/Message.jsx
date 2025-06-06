import React from 'react'
import { useSelector } from 'react-redux';

const Message = ({ messageItem }) => {
    const { message, createdAt, sender, receiver } = messageItem;
    const { userProfile, selectedUser } = useSelector((state) => state.userReducer)

    const date = createdAt.split("T")[0]
    const time = createdAt.split("T")[1].split(":").slice(0, 2)


    return (
        <div>
            <div className={`chat ${userProfile?._id == sender ? 'chat-end' : 'chat-start'}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={sender === userProfile?._id ? userProfile?.avatar : selectedUser?.avatar} />
                    </div>
                </div>
                <div className="chat-header">
                    <time className="text-xs opacity-50">{`${date} , ${time.join(":")}`}</time>
                </div>
                <div className="chat-bubble">{message}</div>
                <div className="chat-footer opacity-50">Delivered</div>
            </div>
        </div>
    )
}

export default Message