import { Box, Button, Stack, Typography } from '@mui/material'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CardTotal from '../component/layout/CardTotal'
import CartTable from '../component/layout/CartTable'

const Cart = () => {

  const [cartTotal, setCartTotal] = useState({})

  const state=useSelector((state)=>state);

  const totalCount=(info)=>{
    setCartTotal(info);
  }

  return (
    <Stack direction="row" marginTop="3rem" justifyContent="space-around" >
    {state?.userLogin?.data?.user.cartItems.length>0?<CartTable/>:<Typography variant='h3'>No Cart Product Found</Typography>}
        
        {state?.userLogin?.data?.user.cartItems.length>0 && (       <Box textAlign="center" sx={{'>p':{fontWeight:"bolder"},'>a':{textDecoration:'none'}}}>
        <Typography>Cart Totals</Typography>
        <CardTotal totalCount={totalCount} />
        <Link to="/payment">
        <Button sx={{
              textTransform: "none",
              background: "#191970",
              color: "white",
              "&:hover": { background: "#191970" },
              mt: "30px",
              width:'100%'
            }}>PLACE ORDER</Button>
            </Link>
        </Box>) }
        
    </Stack>
  )
}

export default Cart