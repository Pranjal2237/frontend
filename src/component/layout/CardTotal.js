import React, {  } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CardTotal = ({totalCount}) => {

  const state=useSelector((state)=>state)

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  // const navigate = useNavigate();

  let subtotal=0;

    state?.userLogin?.data?.user.cartItems.map((item)=>{
      subtotal=subtotal+item.quantity*item.price;
    })

  let taxtotal=Math.ceil(subtotal*0.10);  

  let delivery=40;
  if(subtotal>500)
  {
    delivery='Free'
    console.log('delivery',delivery);
  }

  let total=subtotal+taxtotal;

  if(delivery===Number(40))
  {
    total=total+delivery; 
  }

  if(state?.userLogin?.data?.user.cartItems!==null)
  {
  // const cartPrice={
  //   itemsPrice:subtotal,
  //   taxPrice:taxtotal,
  //   shippingPrice:delivery===Number(40)?40:0,
  //   totalPrice:total
  // }
}


    const rows = [
      createData("Subtotals:", subtotal, 6.0, 24, 4.0),
      createData("Taxtotals:", taxtotal, 6.0, 24, 4.0),
      createData("Delivey Charges:", delivery, 6.0, 24, 4.0),
      createData("Totals:", total, 9.0, 37, 4.3),
    ];

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   navigate("/payment");
  // };
  return (
    <Box
      sx={{
        alignItems: "center",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        p: "15px",
        mt: "20px",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", width: "400px" }}
      >
        <Table sx={{ Width: "100%", p: "10px" }} aria-label="simple table">
          {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight:'400',fontSize:'20px' }}
                >
                  {row.name}
                </TableCell>
                <TableCell align="right" sx={{fontSize:'18px'}}>{row.calories}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <form>
        <Box>
          <input type="checkbox" required />
          <lebel>Shipping & taxes calculated at Checkout</lebel>
        </Box>
        <Button
          type="submit"
          sx={{
            textTransform: "none",
            "&:hover": { background: "#191970" },
            mt: "1.5rem",
            width: "100%",
            background: "#191970",
            color: "white",
          }}
          onClick={handleSubmit}
        >
          Proceed To Checkout
        </Button>
      </form> */}
    </Box>
  );
};

export default CardTotal;
