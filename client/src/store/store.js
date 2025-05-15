import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slice/user/user.slice.js"

export default configureStore({
    reducer: { userReducer },
})