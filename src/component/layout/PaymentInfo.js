import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PaymentInfo = () => {
  return (
    <Box sx={{ p: "30px", background: "#fcf4fc" }}>
      <Box>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          Shipping Address
        </Typography>
      </Box>
      <form>
        <Box
          sx={{
            width: "500px",
            ">input": {
              height: "35px",
              mt: "30px",
              outline: "none",
              border: "none",
              borderBottom: "1px solid black",
              background: "none",
            },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              ">input": {
                height: "35px",
                mt: "30px",
                outline: "none",
                border: "none",
                borderBottom: "1px solid black",
                width: "240px",
                background: "none",
              },
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </Box>
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Nearby Location" />
          <input type="text" placeholder="City" />
          <Box
            sx={{
              ">input": {
                height: "35px",
                mt: "30px",
                outline: "none",
                border: "none",
                borderBottom: "1px solid black",
                width: "240px",
                background: "none",
              },
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="Postal Code" />
          </Box>
        </Box>
        <Link to="/payment/ordered" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              textTransform: "none",
              background: "#191970",
              color: "white",
              "&:hover": { background: "#191970" },
              mt: "30px",
            }}
          >
            Continue Shipping
          </Button>
        </Link>
      </form>
    </Box>
  );
};

export default PaymentInfo;
