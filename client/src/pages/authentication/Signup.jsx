import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { registerUserThunk } from '../../store/slice/user/user.thunk.js';
import { toast } from 'react-hot-toast';

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [signUp, setSignUp] = useState({
    fullName: "",
    username: "",
    password: "",
    gender: "male",
    confirmPassword: "",
  })

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setSignUp({ ...signUp, [e.target.name]: e.target.value })
  }

  const handleOnRegister = async (e) => {
    // console.log("clicked");
    if (signUp.confirmPassword != signUp.password) {
      toast.error("Both password should be matched.")
      return
    }
    const response = await dispatch(registerUserThunk(signUp))
    if(response.payload?.success){
      navigate("/login")
    }
  }

  return (
    <>
      <div className='flex justify-center items-center p-6 min-h-screen'>
        <div className='max-w-[30rem] w-full h-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg'>
          <div className='font-semibold text-3xl'>Sign Up</div>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaUser />
            <input type="text" name='fullName' className="grow" placeholder="Full Name" onChange={handleInputChange} />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaUser />
            <input type="text" name='username' className="grow" placeholder="Username" onChange={handleInputChange} />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaKey />
            <input type="password" name='password' className="grow" placeholder='Password' onChange={handleInputChange} />
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaKey />
            <input type="password" name='confirmPassword' className="grow" placeholder='Confirm Password' onChange={handleInputChange} />
          </label>
          <label htmlFor="" className='flex gap-5'>
            <div className='flex gap-2'>
              <input type="radio" name="gender" className="radio radio-primary" defaultChecked value="male" onChange={handleInputChange} />Male
            </div>
            <div className='flex gap-2'>
              <input type="radio" name="gender" className="radio radio-primary" value="female" onChange={handleInputChange} />Female
            </div>
          </label>
          <button className="btn btn-outline btn-primary" onClick={handleOnRegister}>Signup</button>

          <p className=''>Already have an account? <Link to={'/login'} className='text-blue-400 underline'>Login</Link></p>
        </div>
      </div>
    </>
  )
}

export default Signup