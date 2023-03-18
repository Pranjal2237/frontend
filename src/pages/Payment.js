import { Box, Stack, Button } from '@mui/material'
import React,{useState} from 'react'
import CardTotal from '../component/layout/CardTotal'
import CartTable from '../component/layout/CartTable'
import PaymentInfo from '../component/layout/PaymentInfo'
import PaymentCard from '../component/PaymentCard'

const Payment = () => {

  const [sequence, setSequence] = useState(0);
  const [shippingInfo, setShippingInfo] = useState({})
  const [cartTotal, setCartTotal] = useState({})

  const change=(info)=>{
    setShippingInfo(info);
  }

  const totalCount=(info)=>{
    setCartTotal(info);
  }

  console.log(cartTotal)

  return (
    <Stack direction="row" marginTop="60px" justifyContent="center" alignItems="center">
    <Box>
        {sequence===0 && <PaymentInfo onClick={()=>setSequence(sequence+1)} change={change} />}
        {sequence===1 && <CartTable/>}
        {sequence===1 && <Button            sx={{
              textTransform: "none",
              background: "#191970",
              color: "white",
              "&:hover": { background: "#191970" },
              mt: "30px",
            }} onClick={()=>setSequence(sequence+1)}>CONTINUE</Button>}
        {sequence===2 && <PaymentCard shippingInfo={shippingInfo}  />}
        </Box>
        <Box sx={{ml:'30px'}}>
        <CardTotal totalCount={totalCount} />
        </Box>
    </Stack>
  )
}

export default Payment