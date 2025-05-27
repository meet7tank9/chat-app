import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { loginUserThunk } from './store/slice/user/user.thunk.js'
import { Toaster } from "react-hot-toast"

const App = () => {
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