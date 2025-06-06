import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getOtherUsersThunk, getUserProfileThunk, loginUserThunk } from './store/slice/user/user.thunk.js'
import { Toaster } from "react-hot-toast"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await dispatch(getUserProfileThunk())
      // console.log(response);
      // return
    }
    fetchUsers()
  }, [])

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App