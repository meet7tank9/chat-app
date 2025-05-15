import { createAsyncThunk } from "@reduxjs/toolkit"

export const loginUserThunk = createAsyncThunk('users/fetchById', async () => {
    console.log("hellow chaiotheoih");
})