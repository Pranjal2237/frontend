import React,{ useEffect, } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/productsSlice";
import {add} from '../../redux/slice/CartSlice'

const ProductCard = () => {
  
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getProducts());
  }, []);


  const StyledButton = styled(Button)({
    minWidth: "0px",
  });

  const d=useDispatch();

  const handleAdd =(product)=>{
    d(add(product))
  }


  return (
    <Box>
    {state?.products?.data?.products.map((product)=>{

  return(
      <Box sx={{ display: "flex", alignItems: "center",mt:'30px' }}>
        <Box sx={{ width: "350px"}}>
          <Link to={`/product/${product._id}`} >
            <img
              src={product.images[0].public_id}
              alt=""
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Link>
        </Box>
        <Box sx={{}}>
          <Typography sx={{ fontWeight: "bold", color: "#000080" }}>
            {product.name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography>Rs. {product.price}</Typography>
            <Rating
              name="rating"
              value={product.rating}
              readOnly
              sx={{ m: "5px"}}
            />
          </Box>
          <Typography>{product.description}</Typography>
          {/* <Link to="/cart"> */}
          <StyledButton onClick={()=> handleAdd(product)}>
            <ShoppingCartOutlinedIcon />
          </StyledButton>
          {/* </Link> */}
          <StyledButton>
            <FavoriteBorderOutlinedIcon />
          </StyledButton>
          <StyledButton>
            <ZoomInOutlinedIcon />
          </StyledButton>
        </Box>
      </Box>
  )
    })}
    </Box>
  );
};

export default ProductCard;
