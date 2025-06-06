import React, { useState } from 'react'
import { AiOutlineSend } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageThunk } from '../../store/slice/message/message.thunk';

const SendMessage = () => {
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()
    const { selectedUser } = useSelector(state => state.userReducer)

    const handleOnSend = async () => {
        const response = await dispatch(sendMessageThunk({ receiverId: selectedUser?._id, message }))
        setMessage("")
    }

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            handleOnSend()
        }
    }

    return (
        <div className='w-full p-3 flex items-center gap-3'>
            <input
                type="text"
                placeholder="Type a message"
                value={message}
                className="input input-bordered input-primary w-full h-[3rem] min-w-xs flex items-center justify-center resize-none" onChange={(e) => setMessage(e.target.value)} onKeyDown={handleKeyDown} rows={1} />

            <button className="btn btn-square btn-outline h-[3rem] w-[3rem]" onClick={handleOnSend} >
                <AiOutlineSend />
            </button>
        </div>
    )
}

export default SendMessage