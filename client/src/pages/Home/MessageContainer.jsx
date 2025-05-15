import React from 'react'
import User from './User'
import Message from './Message'
import { AiOutlineSend } from "react-icons/ai";

const MessageContainer = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='p-4 border-b border-b-slate-500 border-l border-l-slate-500 rounded-bl-xl shadow-md shadow-slate-700'>
        <User />
      </div>
      <div className='h-full p-4 overflow-y-auto'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className='w-full p-3 flex items-center gap-3'>
        <input
          type="text"
          placeholder="Type a message"
          className="input input-bordered input-primary w-full h-[3rem] min-w-xs" />

        <button className="btn btn-square btn-outline h-[3rem] w-[3rem]">
          <AiOutlineSend />
        </button>
      </div>
    </div>
  )
}

export default MessageContainer