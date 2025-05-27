import React from 'react'
import { FaSearch } from "react-icons/fa";
import User from "./User"
import { logoutUserThunk } from '../../store/slice/user/user.thunk.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

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
            <div className='h-full flex flex-col gap-5 overflow-y-auto p-4 '>
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
            <div className='bg-black px-4 py-3 flex items-center justify-between'>
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <button className="btn btn-outline btn-primary btn-sm px-4" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar