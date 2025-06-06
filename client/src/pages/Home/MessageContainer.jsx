import React, { useEffect } from 'react'
import User from './User'
import Message from './Message'
import { useDispatch, useSelector } from 'react-redux';
import { getUserMessagesThunk } from '../../store/slice/message/message.thunk';
import SendMessage from './SendMessage';

const MessageContainer = () => {
  const { selectedUser } = useSelector(state => state?.userReducer)
  const { messages } = useSelector(state => state?.messageReducer)

  const dispatch = useDispatch()

  useEffect(() => {

    const fetchMessages = async () => {
      const response = await dispatch(getUserMessagesThunk({ otherParticipantId: selectedUser?._id.toString() }))
    }

    if (selectedUser)
      fetchMessages()
    else {
      return
    }

  }, [selectedUser])

  return (
    <>
      {
        !selectedUser
          ? (
            <div className='flex flex-col items-center justify-center w-full text-5xl font-semibold text-slate-700'>Please select a chatter</div>
          )
          : (

            <div className='w-full h-screen flex flex-col'>
              <div className='p-4 border-b border-b-slate-500 border-l border-l-slate-500 rounded-bl-xl shadow-md shadow-slate-700'>
                <User user={selectedUser} />
              </div>
              <div className='h-full p-4 overflow-y-auto'>
                {
                  messages?.length > 0 && messages?.map((message) => {
                    return <Message key={message?._id} messageItem={message} />
                  })
                }
              </div>
              <SendMessage />
            </div >
          )}
    </>
  )
}

export default MessageContainer