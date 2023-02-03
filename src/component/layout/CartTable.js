import { Box } from "@mui/material";
import React,{useEffect, useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

const CartTable = () => {

  const state=useSelector((state)=>state)

  const [rows,setRows] = useState([]);

  const [quantity, setquantity] = useState(1);

  useEffect(()=>{
    setRows(state.cart);
    console.log(rows);
  },[state]);
   
  const handleChange = (e,index) =>{
    console.log(rows[index].stock);
    let arr=[...rows];
    let obj={...arr[index]}
    obj.stock=e.target.value;
    arr[index]=obj;
    console.log(arr)
    setRows(arr)


  }
  return (
    <Box>
      <TableContainer component={Paper} sx={{ width: "800px",boxShadow:'none' }}>
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
            {rows.map((row,index) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">
                  <input
                    type="number"
                    defaultValue={row.stock}
                    onChange={(e)=>{
                      handleChange(e,index)
                    }}
                    style={{ width: "50px", outline: "none", height: "20px" }}
                  />
                </TableCell>
                <TableCell align="right">{row.price*row.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CartTable;
