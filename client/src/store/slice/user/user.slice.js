import { createSlice } from '@reduxjs/toolkit'
import { getOtherUsersThunk, getUserProfileThunk, loginUserThunk, logoutUserThunk, registerUserThunk } from './user.thunk';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        screenLoading: true,
        userProfile: null,
        otherUsers: null,
        // selectedUser: null,
        buttonLoading: false,
        selectedUser: JSON.parse(localStorage.getItem("selectedUser")) || null
    },
    reducers: {
        setSelectedUser: (state, action) => {
            localStorage.setItem("selectedUser", JSON.stringify(action?.payload))
            state.selectedUser = action?.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUserThunk.pending, (state, action) => {
            // console.log("pending");
            state.buttonLoading = true
        })
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            state.userProfile = action.payload?.responseData?.userExists
            state.buttonLoading = false
            state.isAuthenticated = true
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
            localStorage.clear()
            state.selectedUser = null
            state.otherUsers = null
            state.isAuthenticated = false
            state.userProfile = null
        })
        builder.addCase(logoutUserThunk.rejected, (state, action) => {
            state.buttonLoading = false
        })


        builder.addCase(getUserProfileThunk.pending, (state, action) => {
            // console.log("pending");
            // state.screenLoading = true
        })
        builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
            // state.userProfile = action.payload?.responseData?.userExists
            state.screenLoading = false
            state.isAuthenticated = true
            state.userProfile = action.payload?.responseData?.user
        })
        builder.addCase(getUserProfileThunk.rejected, (state, action) => {
            state.screenLoading = false
        })


        builder.addCase(getOtherUsersThunk.pending, (state, action) => {
            state.screenLoading = true
        })
        builder.addCase(getOtherUsersThunk.fulfilled, (state, action) => {
            state.otherUsers = action?.payload?.responseData
            state.screenLoading = false
        })
        builder.addCase(getOtherUsersThunk.rejected, (state, action) => {
            state.screenLoading = false
        })
    },
})

export const { setSelectedUser } = userSlice.actions

export default userSlice.reducer