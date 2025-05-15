import React, {useState} from 'react'
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  })

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='flex justify-center items-center p-6 min-h-screen'>

        <div className='max-w-[30rem] w-full h-full flex flex-col gap-5 bg-base-200 p-6 rounded-lg'>
          <div className='font-semibold text-3xl'>Login</div>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaUser />
            <input type="text" name='username' className="grow" placeholder="Username" onChange={handleInputChange}/>
          </label>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaKey />
            <input type="password" name='password' className="grow" placeholder='Password' onChange={handleInputChange}/>
          </label>
          <button className="btn btn-outline btn-primary">Login</button>

          <p className=''>Don't have an account? <Link to={'/signup'} className='text-blue-400 underline'>Sign Up</Link></p>
        </div>
      </div>
    </>
  )
}

export default Login