import Header from "./component/layout/Header.js";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./component/layout/Footer.js";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import SingleProduct from "./pages/SingleProduct.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Cart from "./pages/Cart.js";
import Payment from "./pages/Payment.js";
import Ordered from "./pages/Ordered.js";
import './App.css'
import { loadUser } from "./redux/slice/loginSlice.js";
import Store, { store } from './redux/store' ;
import { useEffect, useState } from "react";
import WishList from "./pages/WishList.js";
import { Box } from "@mui/material";
import Order from "./pages/Order.js";
import User from "./pages/User.js";
import PrivacyPolicy from "./component/layout/PrivacyPolicy.js";
import TermOfUse from "./component/layout/TermOfUse.js";

function App() {

  useEffect(()=>{
    store.dispatch(loadUser());
  },[])
  
  
  return (
    <Router>
      <Box minHeight='100vh' display='flex' flexDirection='column' justifyContent='space-between'>
        <Header style={{ zIndex: 1000, position: "Relative" }} />
        <Routes>
          <Route exact path="/" element={<Home />} replace />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/payment/ordered" element={<Ordered/>} />
          <Route path="/user/wishlist" element={<WishList/>} />
          <Route path="/user/order" element={<Order/>} />
          <Route path="/profile" element={<User/>} /> 
          <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
          <Route path='/terms' element={<TermOfUse/>} />
        </Routes>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;
