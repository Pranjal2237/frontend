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
    sx={{position:'sticky', zIndex:'10',background:' #A020F0',top:0,justifyContent:"space-between",}}>
      <Link to='/'>
        <img src={logo} alt='logo' height={80}></img>
      </Link>  
        <Stack direction='row' spacing={5} sx={{'>a':{textDecoration:'none',color:'black'}}}>
        <Link to='/'>
        <Typography>Home</Typography>
      </Link>
      <Link to='/products'>
        <Typography>Products</Typography>
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