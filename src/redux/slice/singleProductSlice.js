import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios'

export const getSingleProduct=createAsyncThunk('getSingleProduct',async ()=>{
    const response=await Axios.get('http://localhost:4000/app/v1/product/63ca43ce07aae104805e3f1b');
    console.log(response.data);
    return response.data;
})

const singleProductSlice=createSlice({
    name:'singleProduct',
    initialState:{
        isLoading:false,
        data:null,
        error:false
    },
    extraReducers:(builder)=>{
        builder.addCase(getSingleProduct.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(getSingleProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload
        });
        builder.addCase(getSingleProduct.rejected,(state,action)=>{
            state.error=true;
            console.log('error',action.payload);
        });
    }
})

export default singleProductSlice.reducer