import React from 'react'

const User = () => {
    return (
        <div className='flex gap-5 items-center'>
            <div className="avatar online">
                <div className="w-[50px] rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='line-clamp-1'>
                    Full Name
                </div>
                <div className='text-sm'>
                    username
                </div>
            </div>
        </div>
    )
}

export default User