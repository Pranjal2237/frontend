import React from "react";
import { productFilter } from "../../extra/categories";
import { Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";

const SideBar = () => {
  return (
    <Box sx={{ ">div": { m: "30px" } }}>
      <Box sx={{ ">p": { fontSize: "20px", textDecoration: "underline" } }}>
        <Typography>Categories</Typography>
        {productFilter.categories.map((category) => {
          return (
            <Box sx={{ m: "7px" }}>
              <input type="checkbox" />
              <label style={{ fontSize: "20px" }}>{category}</label>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ ">p": { fontSize: "20px", textDecoration: "underline" } }}>
        <Typography>Price Filter</Typography>
        {productFilter.priceRange.map((price) => {
          return (
            <Box sx={{ m: "7px" }}>
              <input type="checkbox" />
              <label style={{ fontSize: "20px" }}>{price}</label>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ ">p": { fontSize: "20px", textDecoration: "underline" } }}>
        <Typography>Ratings</Typography>
        {productFilter.rating.map((key) => {
          return (
            <Box sx={{ m: "7px" }}>
              <input type="checkbox" />
              <Rating name="rating" value={key} readOnly />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SideBar;
