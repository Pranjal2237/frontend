import React from 'react'
import logo from '../../images/logo.png'
import {Stack,Typography} from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

 const Header = () => {
  return (
    <Stack direction="row"
    alignItems="center"
    p={2}
    sx={{position:'sticky',background:'rgba(35,35,35,0.8)',top:0,justifyContent:"space-between",}}>
      <Link to='/'>
        <img src={logo} alt='logo' height={80}></img>
      </Link>  
        <Stack direction='row' spacing={5} sx={{'>a':{textDecoration:'none',color:'#FFFFFF'}}}>
        <Link to='/'>
        <Typography>Home</Typography>
      </Link>
      <Link to='/product'>
        <Typography>Product</Typography>
      </Link>
      <Link to='/contact'>
        <Typography>Contact</Typography>
      </Link>
      <Link to='about'>
        <Typography>About</Typography>
      </Link> 
        </Stack>     
        <SearchBar/>           
    </Stack>
   
  )
}

export default Header