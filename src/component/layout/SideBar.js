import React,{useEffect, useState} from "react";
import { productFilter } from "../../extra/categories";
import { Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/slice/productsSlice";
import Pagination from '@mui/material/Pagination';

const SideBar = () => {

  const [filter, setfilter] = useState({currentPage:1,category:'',rating:0,priceL:0,priceH:10000000000});

  const [categorySelected, setCategorySelected] = useState()
  const [ratingSelected, setratingSelected] = useState()
  const [priceSelected, setpriceSelected] = useState()

  const handleCategory=(category,idx)=>{
    if(idx===categorySelected){
      setCategorySelected(undefined);
      const temp={...filter}
      temp.category='';
      setfilter(()=>({...temp}));
    }
    else{
      setCategorySelected(idx);
      const temp={...filter}
      temp.category=category;
      setfilter(()=>({...temp}));
    }
  }

  const handleRating=(rating,idx)=>{
    if(idx===ratingSelected)
    {
      setratingSelected(undefined);
      const temp={...filter}
      temp.rating=0;
      setfilter(()=>({...temp}))
    }
    else{
      setratingSelected(idx)
    const temp={...filter}
    temp.rating=rating;
    setfilter(()=>({...temp}))
    }
  }

  const handlePrice=(price,idx)=>{
    if(idx===priceSelected)
    {
      setpriceSelected(undefined)
      const temp={...filter}
      temp.priceL=0;
      temp.priceH=1000000000;
      setfilter(()=>({...temp}))
    }
    else{
      setpriceSelected(idx)
    const temp={...filter}
    const priceRange=price.split('-');
    temp.priceL=priceRange[0];
    temp.priceH=priceRange[1];
    setfilter(()=>({...temp}))
    }
  }

  const handlePage=(event)=>{
    let page=event.target.textContent //to get pagination value
    const temp={...filter}
    temp.currentPage=page;
    setfilter(()=>({...temp}));
  }

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProducts(filter))
  },[filter])

  return (
    <Box sx={{ ">div": { m: "30px" } }}>
      <Box sx={{ ">p": { fontSize: "20px", textDecoration: "underline" } }}>
        <Typography>Categories</Typography>
        {productFilter.categories.map((category,idx) => {
          return (
            <Box sx={{ m: "7px" }}>
              <input type="checkbox" key={category} checked={categorySelected===idx?true:false} onChange={()=>{handleCategory(category,idx)}} />
              <label style={{ fontSize: "20px" }}>{category}</label>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ ">p": { fontSize: "20px", textDecoration: "underline" } }}>
        <Typography>Price Filter</Typography>
        {productFilter.priceRange.map((price,idx) => {
          return (
            <Box sx={{ m: "7px" }}>
              <input type="checkbox" key={price} checked={priceSelected===idx?true:false} onChange={()=>{handlePrice(price,idx)}} />
              <label style={{ fontSize: "20px" }}>{price}</label>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ ">p": { fontSize: "20px", textDecoration: "underline" } }}>
        <Typography>Ratings</Typography>
        {productFilter.rating.map((key,idx) => {
          return (
            <Box sx={{ m: "7px" }}>
              <input type="checkbox" checked={ratingSelected===idx?true:false} onChange={()=>{handleRating(key,idx)}} />
              <Rating name="rating" value={key} readOnly />
            </Box>
          );
        })}
      </Box>
      <Pagination count={10} color="secondary" sx={{mt:'30px'}} size='large' onChange={(event)=>handlePage(event)} />
    </Box>
  );
};

export default SideBar;
