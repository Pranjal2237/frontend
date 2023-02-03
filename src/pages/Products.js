import { Box, Stack } from "@mui/material";
import React from "react";
import SideBar from "../component/layout/SideBar";
import ProductCard from "../component/layout/ProductCard";

const Products = () => {


  return (
    <Stack direction="row" sx={{ justifyContent: "center" }}>
      <Box sx={{}}>
        <SideBar />
      </Box>
      <Box sx={{}}>
        <ProductCard />
      </Box>
    </Stack>
  );
};

export default Products;
