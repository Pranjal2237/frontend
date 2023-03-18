import { Box,Button,Stack, Typography } from '@mui/material'
import React,{useState} from 'react'
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { reviewProduct } from '../../redux/slice/singleProductSlice';

const ProductReview = () => {

  const [open, setopen] = useState(false)
  const [rating, setrating] =useState();
  const [comment, setcomment] = useState('')

  const state=useSelector((state)=>state)

  const dispatch=useDispatch();
 
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(reviewProduct({rating,comment}))
    if(state?.singleProduct?.data.success===true)
    {
      alert(`${state?.userLogin?.data.user.name}'s feedback added Successfully`)
    }
  }



  return (
    <Box>
      <Stack direction='row' sx={{justifyContent:'space-between'}}>
      <Typography variant='h5'>Ratings & Reviews</Typography>
      <Button sx={{textTransform:'none',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',p:'7px 15px',color:'black',fontSize:'15px','&:hover':{boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',background:'white'}}} onClick={()=>{setopen(!open)}} >Rate Product</Button>
      </Stack>
      {open && (<Box sx={{mt:'30px',border:'1px solid #E6E6E6',p:'20px'}}>
      <form onSubmit={(e)=>(handleSubmit(e))}>
      <Box sx={{display:'flex'}}>
      <Typography variant='h6'>
        Rate Here:</Typography>
        <Rating
        name="simple-controlled"
        value={rating}
        size='large'
        sx={{ml:'10px'}}
        onChange={(event, newValue) => {
          setrating(newValue);
        }}
      />
      </Box>
      <textarea placeholder='Comment Your Feedback...' style={{width:'100%',height:'100px',marginTop:'15px',outline:'none',padding:'10px',boxSizing:'border-box'}} value={comment} onChange={(e)=>{setcomment(e.target.value)}} ></textarea>
      <Button type='submit' sx={{textTransform:'none',background:'#626262',color:'white',mt:'15px',fontSize:'18px',fontWeight:'700',p:'7px 15px','&:hover':{background:'#626262'}}}>Submit Here</Button>
      </form>
      </Box>)}
      <Box sx={{mt:'30px'}}>
      {state?.singleProduct?.data.pro.reviews.slice(0,4).map((user)=>{
        return(
          <Box sx={{mt:'',borderBottom:'1px solid #E6E6E6',p:'15px 0px'}}>
          <Rating name="read-only" value={user.rating} readOnly />
          <Typography>{user.comment}</Typography>
          <Typography sx={{fontSize:'14px',mt:'3px',color:'#808080'}}>{user.name}</Typography>
          </Box>
        )
      })}
      </Box>
    </Box>
  )
}

export default ProductReview