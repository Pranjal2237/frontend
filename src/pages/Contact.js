import { Stack } from '@mui/material'
import React from 'react'
import ContactInfo from '../component/layout/ContactInfo'
import ContactMail from '../component/layout/ContactMail'

const Contact = () => {
  return (
    <Stack>
        <ContactInfo/>
        <ContactMail/>
    </Stack>
  )
}

export default Contact