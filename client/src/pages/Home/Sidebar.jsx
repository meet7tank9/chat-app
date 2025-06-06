import React, { useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import User from "./User"
import { getOtherUsersThunk, logoutUserThunk } from '../../store/slice/user/user.thunk.js';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { otherUsers, userProfile } = useSelector((state) => state.userReducer)

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await dispatch(getOtherUsersThunk())
            // console.log(response);
            // return
        }
        fetchUsers()
    }, [])

    const handleLogout = async () => {
        const response = await dispatch(logoutUserThunk({}))
        // console.log(response);
        if (response.payload?.success) {
            navigate("/login")
        }
    }

    return (
        <div className='max-w-[23rem] w-full h-screen flex flex-col border-r border-r-slate-600'>
            <div className='flex items-center justify-start min-h-[3rem] px-4 text-xl font-semibold shadow-sm shadow-slate-600'>
                <p>ONLINE CHAT APP</p>
            </div>
            <div className='p-4'>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <FaSearch />
                </label>
            </div>
            <div className='h-full flex flex-col overflow-y-auto p-4 '>
                {
                    otherUsers?.map((user, index) => {
                        return <span key={index}><User user={user} /></span>
                    })
                }
            </div>
            <div className='bg-black px-4 py-3 flex items-center justify-between'>
                <div className='flex gap-4 items-center'>
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                            <img src={userProfile?.avatar} />
                        </div>
                    </div>
                    <div>
                        <div>{userProfile?.fullName}</div>
                        <div className='text-xs'>{userProfile?.username}</div>
                    </div>
                </div>
                <button className="btn btn-outline btn-primary btn-sm px-4" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar