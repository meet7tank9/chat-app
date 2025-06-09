import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../../store/slice/user/user.slice';

const User = ({ user }) => {
    const dispatch = useDispatch()

    const { selectedUser } = useSelector(state => state?.userReducer)
    const { onlineUsers } = useSelector(state => state.socketReducer)
    const isUserOnline = onlineUsers?.includes(user?._id)

    const handleOnSelectedUser = () => {
        dispatch(setSelectedUser(user))
    }

    return (
        <div className={`flex gap-5 py-2 ps-3 rounded-lg items-center hover:bg-slate-800 cursor-pointer transition-all duration-200 ${user?._id === selectedUser?._id && `bg-slate-900`}`} onClick={handleOnSelectedUser}>
            <div className={`avatar ${isUserOnline && 'online'}`}>
                <div className="w-12 rounded-full">
                    <img src={user?.avatar} />
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='line-clamp-1'>
                    {user?.fullName}
                </div>
                <div className='text-sm'>
                    {user?.username}
                </div>
            </div>
        </div>
    )
}

export default User