import { createAsyncThunk } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import { axiosInstance } from "../../../components/utilities/axiosInstance.js"

export const loginUserThunk = createAsyncThunk('users/login', async ({ username, password }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/user/login", { username, password })
        toast.success("login success")
        return response.data
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Login failed";
        toast.error(errorMessage)
        return rejectWithValue(errorMessage)
    }
})

export const registerUserThunk = createAsyncThunk('users/register', async ({ fullName, username, password, gender }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/user/register", { fullName, username, password, gender })
        toast.success("register success")
        return response.data
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Register failed";
        // console.log(errorMessage);
        toast.error(errorMessage)
        return rejectWithValue(errorMessage)
    }
})

export const logoutUserThunk = createAsyncThunk("user/logout", async ({ }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post("/user/logout", {})
        toast.success("Logout success")
        
        return response?.data
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Logout failed";
        toast.error(errorMessage)
        return rejectWithValue(errorMessage)
    }
})

export const getUserProfileThunk = createAsyncThunk("user/profile", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get("/user/get-profile")
        return response?.data
    } catch (error) {
        const errorMessge = error.response?.data?.message || ""
        return rejectWithValue(errorMessge)
    }
})

export const getOtherUsersThunk = createAsyncThunk("user/other-users", async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get("/user/get-other-users")
        return response?.data
    } catch (error) {
        const errorMessage = error.resposne?.data?.message || ""
        return rejectWithValue(errorMessage)
    }
})