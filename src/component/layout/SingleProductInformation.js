
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { product } from '../../extra/productInformation';
import Rating from "@mui/material/Rating";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const SingleProductInformation = () => {
  return (
    <Stack direction="row" sx={{alignItems:'center',width:'900px',mt:'60px',ml:'20%',boxShadow:'5px 5px 20px 5px #f6def4'}}>
    <Box sx={{width:'150px'}}>
    <img src={product[0].image} alt="" style={{width:'100%',objectFit:'cover'}}/>
    <img src={product[0].image} alt="" style={{width:'100%',objectFit:'cover'}}/>
    <img src={product[0].image} alt="" style={{width:'100%',objectFit:'cover'}}/>
    </Box>
        <Box sx={{width:'450px'}}>
          <img src={product[0].image} alt="" style={{width:'100%',objectFit:'cover'}}/>  
        </Box>
        <Box>
        <Typography>{product[0].name}</Typography>
        <Rating
              name="rating"
              value={product[0].rating}
              readOnly
              sx={{ m: "5px" }}
            />
        <Typography>Rs. {product[0].price}</Typography>
        <Typography>{product[0].description}</Typography>
        <Box sx={{alignItems:'center'}}>
            <Button>Add to Cart</Button>
            <Button><FavoriteBorderOutlinedIcon/></Button>
        </Box>
        <Typography>Categories:</Typography>
        
        </Box>
    </Stack>
  )
}

export default SingleProductInformation