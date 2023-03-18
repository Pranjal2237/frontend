import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import SideBar from "../component/layout/SideBar";
import ProductCard from "../component/layout/ProductCard";


const Products = () => {


  return (
    <Stack direction="column" sx={{ justifyContent: "center" }}>
    <Grid container>
      <Grid item xs={3.5} sx={{display:'flex',justifyContent:'center',mt:'30px'}}><SideBar /></Grid>
      <Grid item xs={8.5} sx={{display:'flex'}}><ProductCard /></Grid>
    </Grid>
      {/* <Box sx={{}}>
        <SideBar />
      </Box>
      <Box sx={{}}>
        <ProductCard />
      </Box> */}
      
    </Stack>
  );
};

export default Products;
