import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import CardTotal from '../component/layout/CardTotal'
import CartTable from '../component/layout/CartTable'

const Cart = () => {
  return (
    <Stack direction="row" marginTop="3rem" justifyContent="space-around" alignItems="center">
        <CartTable/>
        <Box textAlign="center" sx={{'>p':{fontWeight:"bolder"}}}>
        <Typography>Cart Totals</Typography>
        <CardTotal/>
        </Box>
    </Stack>
  )
}

export default Cart