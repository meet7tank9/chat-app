import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk, logoutUserThunk, registerUserThunk } from './user.thunk';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        screenLoading: false,
        userProfile: null,
        buttonLoading: false,
        screenLoading: false,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(loginUserThunk.pending, (state, action) => {
            // console.log("pending");
            state.buttonLoading = true
        })
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            state.userProfile = action.payload?.responseData?.userExists
            state.buttonLoading = false
            isAuthenticated = true
        })
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            state.buttonLoading = false
        })


        builder.addCase(registerUserThunk.pending, (state, action) => {
            // console.log("pending");
            state.buttonLoading = true
        })
        builder.addCase(registerUserThunk.fulfilled, (state, action) => {
            // state.userProfile = action.payload?.responseData?.userExists
            state.buttonLoading = false
            state.isAuthenticated = false
        })
        builder.addCase(registerUserThunk.rejected, (state, action) => {
            state.buttonLoading = false
        })


        builder.addCase(logoutUserThunk.pending, (state, action) => {
            // console.log("pending");
            state.buttonLoading = true
        })
        builder.addCase(logoutUserThunk.fulfilled, (state, action) => {
            // state.userProfile = action.payload?.responseData?.userExists
            state.buttonLoading = false
            state.isAuthenticated = false
            state.userProfile = null
        })
        builder.addCase(logoutUserThunk.rejected, (state, action) => {
            state.buttonLoading = false
        })
    },
})

export const { } = userSlice.actions

export default userSlice.reducer