import { Box, Button, Typography } from "@mui/material";
import React,{useEffect, useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { AddCard } from "@mui/icons-material";
import { addCart, deleteCart } from "../../redux/slice/loginSlice";
import CancelIcon from '@mui/icons-material/Cancel';

const CartTable = () => {

  const state=useSelector((state)=>state)

  const dispatch=useDispatch();

   
  const handleChange = (e,product_id) =>{
    
    dispatch(addCart({quantity:e.target.value,product_id}));
  }
  
  const handleDelete=(cart_id)=>{
    console.log(cart_id)
    dispatch(deleteCart(cart_id));
  }
  

  return (
    <Box>
      <TableContainer component={Paper} sx={{ width: "800px",boxShadow:'none',overflowY:'auto',height:'75vh' }}>
        <Table sx={{ Width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ ">th": { fontSize: "20px", fontWeight: "700" } }}>
              <TableCell>Product</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state?.userLogin?.data?.user.cartItems.map((row,index) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{display:'flex','>p':{ml:'5px'}}}>
                <CancelIcon sx={{cursor:'pointer'}} onClick={()=>{handleDelete(row._id)}} />
                <Box sx={{display:'flex',alignItems:'center','>p':{ml:'5px'}}}>
                  <img src={row.images[0].public_id} alt="" width='150px'/>
                  <Typography>{row.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">
                  <input
                    type="number"
                    value={row.quantity}
                    defaultValue={row.quantity}
                    onChange={(e)=>{
                      handleChange(e,row.product_id)
                    }}
                    style={{ width: "50px", outline: "none", height: "20px" }}
                  />
                </TableCell>
                <TableCell align="right">Rs. {row.quantity*row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CartTable;
