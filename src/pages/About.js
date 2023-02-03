import React from 'react'
import { Stack, Typography,Box } from '@mui/material'
import AboutInfo from '../component/layout/AboutInfo'
import AboutCard from '../component/layout/AboutCard'

const About = () => {
  return (
    <Stack direction="column">
    <AboutInfo/>
    <Box textAlign="center">
    <Typography sx={{mt:'80px',fontWeight:"700",fontSize:"35px"}}>Our Features</Typography>
    <AboutCard/>
    </Box>
    </Stack>
  )
}

export default About