import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios'

export const getSingleProduct=createAsyncThunk('getSingleProduct',async (product_id)=>{
    const response=await Axios.get(`http://localhost:4000/app/v1/product/${product_id}`);
    return response.data;
})

export const reviewProduct=createAsyncThunk('reviewProduct',async({rating,comment})=>{


    const config={
        "Content-Type":"application/json",
        withCredentials:true
    }
    const response=await Axios.post('http://localhost:4000/app/v1/product/63ca43ce07aae104805e3f1b',{rating,comment},config);
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
    extraReducers:{
        [getSingleProduct.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [getSingleProduct.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        },
        [getSingleProduct.rejected]:(state,action)=>{
            state.error=true;
            console.log('error',action.payload);
        },
        [reviewProduct.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [reviewProduct.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        },
        [reviewProduct.rejected]:(state,action)=>{
            state.error=true;
            console.log('error',action.payload);
        }
    }
})

export default singleProductSlice.reducer