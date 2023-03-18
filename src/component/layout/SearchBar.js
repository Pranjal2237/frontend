import { Paper,IconButton } from '@mui/material'
import {Search} from '@mui/icons-material'
import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../redux/slice/productsSlice';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const [keyword, setkeyword] = useState('');
  const navigate=useNavigate();

  const dispatch=useDispatch();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const check={currentPage:1,rating:0,priceL:0,priceH:10000000000,keyword:keyword}
    dispatch(getProducts(check))
    navigate('/products');
  }

  return (
    <Paper component="form" 
    onSubmit={(e)=>{handleSubmit(e)}}
    sx={{borderRadius:20,
         border:'1px solid #e3e3e3',
         pl:2,
         boxShadow:'none',
         mr:{sm:5}
    }} 
    >
     <input
        className='search-bar'
        placeholder='search...'
        value={keyword}
        style={{border:'none',outline:'none'}}
        onChange={(e)=>{setkeyword(e.target.value)}}
     />
     <IconButton type='submit' sx={{p:'10px',color:'red'}}>
        <Search/>
     </IconButton>
    </Paper>
  )
}

export default SearchBar