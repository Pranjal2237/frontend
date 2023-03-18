
import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Rating from "@mui/material/Rating";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useDispatch,useSelector } from 'react-redux';
import { getSingleProduct } from '../../redux/slice/singleProductSlice';
import { useParams } from 'react-router-dom';
import { addCart } from '../../redux/slice/loginSlice';
import { newWishList } from '../../redux/slice/WishListSlice';

const SingleProductInformation = () => {
 
  const dispat=useDispatch();
  const{id}=useParams(); //use to get id of the product from url 
  useEffect(()=>{
    dispat(getSingleProduct(id));
  },[]);

  const product=useSelector((state)=>state?.singleProduct)

  const handleCart=(product_id)=>{
    dispat(addCart({quantity:1,product_id}))
    alert(`${product?.data?.pro.name} is added to your cart`)
  }

  const handleWishList=(product_id)=>{
    dispat(newWishList(product_id))
    alert(`${product?.data?.pro.name} is added to your wishList`)
  }

  return (
    <Stack direction="row" sx={{width:'1000px',m:'auto',mt:'60px',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',p:'20px',justifyContent:'space-evenly'}}>
    <Box sx={{width:'100px',display:"inline-flex",flexDirection:'column',justifyContent:'space-between',border:'1px solid black',p:'10px'}}>
    <img src={product?.data?.pro.images[0].public_id} alt="" style={{width:'100%',objectFit:'cover'}}/>
    <img src={product?.data?.pro.images[0].public_id} alt="" style={{width:'100%',objectFit:'cover'}}/>
    <img src={product?.data?.pro.images[0].public_id} alt="" style={{width:'100%',objectFit:'cover'}}/>
    </Box>
        <Box sx={{width:'500px',p:'30px',border:'1px solid black',display:'flex',alignItems:'flex-start'}}>
          <img src={product?.data?.pro.images[0].public_id} alt="" style={{width:'100%',objectFit:'cover'}}/>  
          <Button onClick={()=>{handleWishList(product?.data?.pro._id)}} ><FavoriteBorderOutlinedIcon/></Button>
        </Box>
        <Box>
        <Typography sx={{fontSize:'24px',fontWeight:'500'}}>{product?.data?.pro.name}</Typography>
        <Rating
              name="rating"
              value={product?.data?.pro.rating}
              readOnly
              sx={{ }}
            />
             <Typography>Category:{product?.data?.pro.category}</Typography>
        <Typography sx={{fontWeight:'600',fontSize:'20px'}}>Rs. {product?.data?.pro.price}</Typography>
        <Typography sx={{color:'GrayText'}}>{product?.data?.pro.description}</Typography>
        <Box sx={{display:'flex',alignItems:'center',width:'230px',justifyContent:'flex-start'}}>
          <Typography sx={{fontSize:'25px',fontWeight:'700'}}>Status :</Typography>
          {product?.data?.pro.stock>0?(<Typography sx={{color:'green',fontSize:'25px'}}>In Stock</Typography>):(<Typography sx={{color:'red',fontSize:'25px'}}>Unavailable</Typography>)}
        </Box>
        <Box sx={{alignItems:'center'}}>
            <Button sx={{fontSize:'20px',fontWeight:'400',color:'white',background:'#191970','&:hover':{background:'#191970'},p:'7px 15px'}} onClick={()=>{handleCart(product?.data?.pro._id)}} >Add to Cart</Button>
           
        </Box> 
        </Box>
    </Stack>
  )
}

export default SingleProductInformation