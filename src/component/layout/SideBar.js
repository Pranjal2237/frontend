import React,{useEffect, useState} from "react";
import { productFilter } from "../../extra/categories";
import { Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/slice/productsSlice";

const SideBar = () => {

  const [filter, setfilter] = useState({currentPage:1,category:'',rating:0,priceL:0,priceH:10000000000});

  const handleCategory=(category)=>{
    const temp={...filter}
    temp.category=category;
    setfilter(()=>({...temp}))
  }

  const handleRating=(rating)=>{
    const temp={...filter}
    temp.rating=rating;
    setfilter(()=>({...temp}))
  }

  const handlePrice=(price)=>{
    const temp={...filter}
    const priceRange=price.split('-');
    temp.priceL=priceRange[0];
    temp.priceH=priceRange[1];
    setfilter(()=>({...temp}))
  }

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProducts(filter))
  },[filter])

  return (
    <Box sx={{ ">div": { m: "30px" } }}>
      <Box sx={{ ">p": { fontSize: "20px", textDecoration: "underline" } }}>
        <Typography>Categories</Typography>
        {productFilter.categories.map((category) => {
          return (
            <Box sx={{ m: "7px" }}>
              <input type="checkbox" key={category} onChange={()=>{handleCategory(category)}} />
              <label style={{ fontSize: "20px" }}>{category}</label>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ ">p": { fontSize: "20px", textDecoration: "underline" } }}>
        <Typography>Price Filter</Typography>
        {productFilter.priceRange.map((price) => {
          return (
            <Box sx={{ m: "7px" }}>
              <input type="checkbox" key={price} onChange={()=>{handlePrice(price)}} />
              <label style={{ fontSize: "20px" }}>{price}</label>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ ">p": { fontSize: "20px", textDecoration: "underline" } }}>
        <Typography>Ratings</Typography>
        {productFilter.rating.map((key) => {
          return (
            <Box sx={{ m: "7px" }}>
              <input type="checkbox" onChange={()=>{handleRating(key)}} />
              <Rating name="rating" value={key} readOnly />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SideBar;
