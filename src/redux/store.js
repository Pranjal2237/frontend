import {configureStore} from '@reduxjs/toolkit'
import CartReducer from './slice/CartSlice'
import productsReducer from './slice/productsSlice'
import singleProductReducer from './slice/singleProductSlice'
import loginReducer from './slice/loginSlice'
import signupReducer from './slice/signupSlice'

export const store=configureStore({
    reducer:{
        products:productsReducer,
        cart:CartReducer,
        singleProduct:singleProductReducer,
        userLogin:loginReducer,
        userSignup:signupReducer
    }
})