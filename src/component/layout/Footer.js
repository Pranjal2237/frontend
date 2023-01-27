import React from 'react'
import { Box} from '@mui/system'
import playStore from '../../images/playstore.png'
import appStore from '../../images/Appstore.png'
import { Typography,Stack} from '@mui/material'

const Footer = () => {
  return (
    <Stack direction="row"
    alignItems='center'
    sx={{backgroundColor:'rgba(35,35,35,0.8)',justifyContent:'space-around',mt:'40px',color:'#FFFFFF',p:'15px'}}>
    <Box  sx={{'>p':{p:'10px'},'>div':{p:'5px'},textAlign:'center'}}>
        <Typography >
            DOWNLOAD OUR APP
        </Typography>
        <Typography>
            Download App for Android and<br/>IOS mobile phone
        </Typography>
        <Box >
           <img src={playStore} alt='playstore-logo' height={50} />
        </Box>
        <Box>   
           <img src={appStore} alt='appstore-logo' height={50} />
        </Box>
    </Box>
    <Box sx={{'>p':{p:'10px'},textAlign:'center'}}>
        <Typography sx={{fontSize:'40px',fontWeight:'bold',color:'#eb4034'}}>
            ECOMMERCE.
        </Typography>
        <Typography>
            High Quality is our first priority<br/>Copyrights 2022
        </Typography>
    </Box>
    
    </Stack>
  )
}

export default Footer