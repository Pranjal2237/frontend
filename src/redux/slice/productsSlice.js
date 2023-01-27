import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {axios} from "react-axios"

export const getProducts=createAsyncThunk('getProducts',async()=>{
    const response=await axios.get('/app/v1/products');
    console.log(response.json());
    return response.json();
})


const productsSlice = createSlice({
    name:'products',
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        });
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.isError=true;
            console.log('Error',action.payload);
        })
    }
})

export default productsSlice.reducer