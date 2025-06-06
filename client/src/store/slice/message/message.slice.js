import { createSlice } from '@reduxjs/toolkit'
import { getUserMessagesThunk, sendMessageThunk } from './message.thunk'

export const messageSlice = createSlice({
    name: "message",
    initialState: {
        buttonLoading: false,
        screenLoading: false,
        messages: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(sendMessageThunk.pending, (state, action) => {
            state.buttonLoading = true

        })
        builder.addCase(sendMessageThunk.fulfilled, (state, action) => {
            // console.log(action.payload?.responseData);
            state.messages = [...state.messages, action.payload?.responseData]
            state.buttonLoading = false

        })
        builder.addCase(sendMessageThunk.rejected, (state, action) => {
            state.buttonLoading = false

        })


        builder.addCase(getUserMessagesThunk.pending, (state, action) => {
            state.buttonLoading = true
            state.screenLoading = true
        })
        builder.addCase(getUserMessagesThunk.fulfilled, (state, action) => {
            state.messages = action.payload?.responseData[0]?.messages
            // console.log(state.messages);
            state.buttonLoading = false

        })
        builder.addCase(getUserMessagesThunk.rejected, (state, action) => {
            state.buttonLoading = false
            state.screenLoading = false
        })
    }
})

export const { } = messageSlice.actions

export default messageSlice.reducer