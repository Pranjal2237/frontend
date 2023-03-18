import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios'

export const loginUser=createAsyncThunk('loginUser',async({email,password})=>{
    const config={
            "Content-Type":"application/json",
            withCredentials:true
    }
    const body={
        email,
        password
    }
    const response=await Axios.post('http://localhost:4000/app/v1/login',
    body,
    config);

    console.log(response.data);
    console.log(response.headers)
    return response.data;
});

export const loadUser=createAsyncThunk('loadUser',async()=>{

    const response=await Axios.get('http://localhost:4000/app/v1/user',{withCredentials:true});
    console.log(response.data)
    return response.data
})

const loginSlice=createSlice({
    name:'login',
    initialState:{
isLoading:false,
        data:null,
        error:false
    },        
    extraReducers:(builder)=>{
        console.log('working')
        builder.addCase(loginUser.pending||loadUser.pending,(state,action)=>{
            console.log('working')
            return{...state,isLoading:true};
        })
        builder.addCase(loginUser.fulfilled||loadUser.fulfilled,(state,action)=>{
            console.log('working2')
            state.isLoading=false;
            state.data=action.payload;
            // alert(`User logged in successfully`)
        })
        builder.addCase(loginUser.rejected||loadUser.rejected,(state,action)=>{
            state.error=true;
            console.log('error',action.payload.message);
        })
    }
})

export default loginSlice.reducer