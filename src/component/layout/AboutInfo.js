import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";
import about from "../../images/about.webp";


const AboutInfo = () => {
    const StyledButton = styled(Button)({
        color:'#FFFFFF',
        background:'#FB2E86',
        '&:hover':{
            background:'#FB2E86'
        },
        marginTop:'50px'
    })
  return (
    <Stack direction="row" sx={{ mt: "60px",width:'1200px',alignItems:'center' ,gap:"2em",ml:'13%'}}>
      <Box sx={{ width: "600px" }}>
        <img src={about} alt="" style={{ width: "100%", objectFit: "cover" }} />
      </Box>
      <Box sx={{width:'500px',mr:'15px'}}>
        <Typography sx={{fontSize:'30px',fontWeight:'700',mb:'15px'}}>
          Know About Our Eccomerce
          <br />
          Bussiness,History
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deleniti, aspernatur adipisci laudantium optio hic incidunt voluptas
          est quo consequuntur aliquam.
        </Typography>
        <StyledButton>Contact Us</StyledButton>
      </Box>
    </Stack>
  );
};

export default AboutInfo;
