import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardTotal = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const navigate = useNavigate();

  const rows = [
    createData("Subtotals:", 159, 6.0, 24, 4.0),
    createData("Totals:", 237, 9.0, 37, 4.3),
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/payment");
  };
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
        sx={{ boxShadow: "none", width: "300px" }}
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
                  sx={{ fontWeight: "bolder" }}
                >
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <form>
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
      </form>
    </Box>
  );
};

export default CardTotal;
