import React from 'react'
import { Stack } from '@mui/material'
import AboutInfo from '../component/layout/AboutInfo'
import AboutCard from '../component/layout/AboutCard'

const About = () => {
  return (
    <Stack direction="column">
    <AboutInfo/>
    <AboutCard/>
    </Stack>
  )
}

export default About