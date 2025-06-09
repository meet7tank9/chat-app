import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slice/user/user.slice.js"
import messageReducer from "./slice/message/message.slice.js"
import socketReducer from "./slice/socket/socket.slice.js"

export default configureStore({
    reducer: { userReducer, messageReducer, socketReducer },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware({
            serializableCheck: {
                ignoredPaths: ["socketReducer.socket"]
            }
        })
    )
})