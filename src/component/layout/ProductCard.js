import React,{ useEffect } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/productsSlice";
import {addCart} from '../../redux/slice/loginSlice'
import { deleteWishList, newWishList } from "../../redux/slice/WishListSlice";
import { getAllWishList } from "../../redux/slice/WishListSlice";

const ProductCard = () => {
  
  const dispatch = useDispatch();
  const disp=useDispatch();
  const state = useSelector((state) => state);
  let a=[];
  
  const StyledButton = styled(Button)({
    minWidth: "0px",
  });

  const handleAdd =(product_id)=>{
    dispatch(addCart({quantity:1,product_id}))
  }

  const handleRemoveWishlist=(product_id)=>{
    dispatch(deleteWishList(product_id))
  }

  const handleWishList=(product_id)=>{
    dispatch(newWishList(product_id))
  }
  useEffect(() => {
    dispatch(getProducts());
    },[]);

    useEffect(()=>{
      disp(getAllWishList())
      if(state?.wishlist?.data?.products!==null)
      {
        state?.wishlist?.data?.products.map((item)=>(
          a.push(item.wishListProduct.product_id)
        ))
      }
    },[])

  return (
    <Box sx={{width:'100%'}}>
    {state?.products?.data?.products.length===0?(<Typography sx={{fontSize:'30px',fontWeight:'700'}}>No Product Found!!</Typography>):state?.products?.data?.products.map((product,index)=>{

  return(
      <Box sx={{ display: "flex", alignItems: "center",p:'30px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
        <Box sx={{ width: "250px"}}>
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
          <StyledButton onClick={()=> handleAdd(product._id)}>
            <ShoppingCartOutlinedIcon />
          </StyledButton>
          {/* </Link> */}
          {a.includes(product._id)?(<StyledButton onClick={()=>{handleRemoveWishlist(product._id,index)}}><FavoriteIcon sx={{color:'red'}}/></StyledButton>):(<StyledButton onClick={()=>{handleWishList(product._id,index)}}>
            <FavoriteBorderOutlinedIcon />
          </StyledButton>)}
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
