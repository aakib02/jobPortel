import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const login = createAsyncThunk('/login',async(loginData)=>{
    try {
        const data = await axios.post('http://localhost:8000/api/login',loginData)
    } catch (error) {
        return rejectWithValue(error)
    }
})

const intialState = {
    loading : false,
    token : null,
    roll : null,
    error : null
}

const authSlice = createSlice({
    name: "auth",
    intialState,
    reducers: {

    },
    extraReducers: (builder) => {
    builder.addCase(login.pending,(state,action)=>{
        state.loading = true
    }).addCase(login.fulfilled,(state,action)=>{

    })
    }

})

export const {} = authSlice.actions
export default authSlice.reducer
