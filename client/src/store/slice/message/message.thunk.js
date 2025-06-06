import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../components/utilities/axiosInstance";

export const sendMessageThunk = createAsyncThunk("message/send-message", async ({ receiverId, message }, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post(`/message/send-message/${receiverId}`, { message })
        return response.data
    } catch (error) {
        const errorMessage = error.response?.data?.message || "Error while sending message";

        return rejectWithValue(errorMessage)
    }
})

export const getUserMessagesThunk = createAsyncThunk(`/message/get-messages`,
    async ({ otherParticipantId }, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/message/get-messages/${otherParticipantId}`)
            // console.log(response);
            return response.data
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Could not getting messages! please refresh the page";

            return rejectWithValue(errorMessage)
        }
    })