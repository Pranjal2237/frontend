
import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { product } from '../../extra/productInformation';
import Rating from "@mui/material/Rating";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useDispatch,useSelector } from 'react-redux';
import { getSingleProduct } from '../../redux/slice/singleProductSlice';

const SingleProductInformation = () => {
 
  const dispat=useDispatch();
 
  useEffect(()=>{
    dispat(getSingleProduct());
  },[]);

  const product=useSelector((state)=>state?.singleProduct)



  return (
    <Stack direction="row" sx={{alignItems:'center',width:'900px',mt:'60px',ml:'20%',boxShadow:'5px 5px 20px 5px #f6def4'}}>
    <Box sx={{width:'150px'}}>
    <img src={product?.data?.pro.images[0].public_id} alt="" style={{width:'100%',objectFit:'cover'}}/>
    <img src={product?.data?.pro.images[0].public_id} alt="" style={{width:'100%',objectFit:'cover'}}/>
    <img src={product?.data?.pro.images[0].public_id} alt="" style={{width:'100%',objectFit:'cover'}}/>
    </Box>
        <Box sx={{width:'450px'}}>
          <img src={product?.data?.pro.images[0].public_id} alt="" style={{width:'100%',objectFit:'cover'}}/>  
        </Box>
        <Box>
        <Typography>{product?.data?.pro.name}</Typography>
        <Rating
              name="rating"
              value={product?.data?.pro.rating}
              readOnly
              sx={{ m: "5px" }}
            />
        <Typography>Rs. {product?.data?.pro.price}</Typography>
        <Typography>{product?.data?.pro.description}</Typography>
        <Box sx={{display:'flex',alignItems:'center',width:'110px',justifyContent:'space-between'}}>
          <Typography>Status:</Typography>
          {product?.data?.pro.stock>0?(<Typography>In Stock</Typography>):(<Typography>Unavailable</Typography>)}
        </Box>
        <Box sx={{alignItems:'center'}}>
            <Button>Add to Cart</Button>
            <Button><FavoriteBorderOutlinedIcon/></Button>
        </Box>
        <Typography>Categories:{product?.data?.pro.category}</Typography>
        
        </Box>
    </Stack>
  )
}

export default SingleProductInformation