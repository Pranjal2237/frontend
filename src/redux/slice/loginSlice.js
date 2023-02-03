import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios'

export const loginUser=createAsyncThunk('loginUser',async({email,password})=>{
    const config={
            "Content-Type":"application/json",
    }
    const body={
        email,
        password
    }
    const response=await Axios.post('http://localhost:4000/app/v1/login',
    body,
    config);

    console.log(response.data);
    return response.data;
});

const loginSlice=createSlice({
    name:'login',
    initialState:{
        isLoading:false,
        data:null,
        error:false
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUser.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
            alert(`User logged in successfully`)
        })
        builder.addCase(loginUser.rejected,(state,action)=>{
            state.error=true;
            console.log('error',action.payload.message);
        })
    }
})

export default loginSlice.reducer