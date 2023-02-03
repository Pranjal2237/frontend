import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ContactInfo = () => {
  return (
    <Stack direction="row" marginTop="80px" sx={{width:'1100px',justifyContent:'space-between',ml:'15%'}}>
        <Box sx={{width:'550px'}}>
            <Typography sx={{fontSize:"35px",fontWeight:"700"}}>
                Information About us
            </Typography>
            <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deleniti, aspernatur adipisci laudantium optio hic incidunt voluptas
          est quo consequuntur aliquam.
            </Typography>
        </Box>
        <Box sx={{width:'500px'}}>
            <Typography sx={{fontSize:'35px',fontWeight:'700'}}>
                Contact Way
            </Typography>
            <Box sx={{display:'flex',width:'500px',justifyContent:'space-between','>div':{display:'flex', flexDirection:'column'}}}>
              <Box sx={{'>p':{mt:'10px'}}}>
                <Typography>
                  Tel:8081249719<br/>Email:pranjalvaish11122001@gmail.com
                </Typography>
                <Typography>
                Gadi Bazar<br/>Colonelganj,Gonda 
                </Typography>
              </Box>
              <Box sx={{'>p':{mt:'10px'}}}>
                <Typography>
                Support Forum<br/>Over 24hr
                </Typography>
                <Typography>
                  Free Standerd shipping<br/>on all orders
                </Typography>
              </Box>
            </Box>
        </Box>
    </Stack>
  )
}

export default ContactInfo