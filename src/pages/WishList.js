import React, { useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { getAllWishList } from '../redux/slice/WishListSlice'
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import { deleteWishList } from '../redux/slice/WishListSlice';

const WishList = () => {

    const dispatch=useDispatch()

    const dispat=useDispatch();

    
    const [dataLoaded, setDataLoaded] = React.useState(false);
    
    const handleDelete=(product_id)=>{
        dispat(deleteWishList(product_id));
        setDataLoaded(!dataLoaded);
    }
    const userWishList=useSelector((state)=>state.wishlist);

    useEffect(()=>{
        dispatch(getAllWishList());
    },[dataLoaded])  

  return (
    <Box>
    <Box sx={{boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',p:'15px',width:'60%',margin:'0 auto',mt:'40px'}}>
        <Typography>My WishList</Typography>
    </Box>
    {userWishList?.data?.products && userWishList?.data?.products.map((wishlist)=>{
        return(
            <Box sx={{display:'flex',width:'60%',margin:'auto',p:'15px',justifyContent:'space-between',mt:'10px',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
            <Box sx={{display:'flex',width:'40%',justifyContent:'space-between'}}>
            <Box sx={{width:'200px'}}>
            <img src={wishlist.wishListProduct.images[0].public_id} alt="" width='100%' style={{objectFit:'cover'}} />
            </Box>
            <Box>
            <Typography>{wishlist.wishListProduct.name}</Typography>
            <Rating name="read-only" value={wishlist.wishListProduct.rating} readOnly />
            <Typography sx={{fontWeight:'600'}}>Rs. {wishlist.wishListProduct.price}</Typography>
            </Box>
            </Box>
            <Box>
            <Button sx={{p:'0px'}} onClick={()=>{handleDelete(wishlist._id)}}>
            <DeleteIcon sx={{color:'GrayText'}}  />
            </Button>
            </Box>
            </Box>
        )
    })}
    </Box>
  )
}

export default WishList