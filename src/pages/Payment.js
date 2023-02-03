import { Box, Stack } from '@mui/material'
import React from 'react'
import CardTotal from '../component/layout/CardTotal'
import CartTable from '../component/layout/CartTable'
import PaymentInfo from '../component/layout/PaymentInfo'

const Payment = () => {
  return (
    <Stack direction="row" marginTop="60px" justifyContent="center" alignItems="center">
        <PaymentInfo/>
        <Box sx={{ml:'30px'}}>
        <CardTotal/>
            <CardTotal/>
        </Box>
    </Stack>
  )
}

export default Payment