import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProductInfo = () => {
  return (
    <Box sx={{boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',p:'55px 15px',mt:'20px'}}>
        <Box sx={{'>p':{mt:'10px'},mt:'10px'}}>
            <Typography variant='h6' color='primary'>Various tempor.</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates impedit quisquam corrupti itaque delectus saepe inventore eveniet nulla facere quaerat reiciendis nesciunt voluptas mollitia maiores, iure aliquam assumenda deleniti consequuntur!</Typography>
        </Box>
        <Box marginTop='30px' sx={{'>div':{mt:'5px'}}}>
          <Typography variant='h6' color='primary'>More details</Typography>
          <Box sx={{display:'flex','>p':{ml:'5px'}}}>
            <ArrowForwardIcon color='primary'/>
            <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ex temporibus nesciunt reprehenderit sed</Typography>
          </Box>
          <Box sx={{display:'flex','>p':{ml:'5px'}}}>
            <ArrowForwardIcon color='primary'/>
            <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ex temporibus nesciunt reprehenderit sed</Typography>
          </Box>
          <Box sx={{display:'flex','>p':{ml:'5px'}}}>
            <ArrowForwardIcon color='primary'/>
            <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ex temporibus nesciunt reprehenderit sed</Typography>
          </Box>
          <Box sx={{display:'flex','>p':{ml:'5px'}}}>
            <ArrowForwardIcon color='primary'/>
            <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ex temporibus nesciunt reprehenderit sed</Typography>
          </Box>
        </Box>
    </Box>
  )
}

export default ProductInfo