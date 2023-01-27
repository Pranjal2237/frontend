import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import SideBar from "../component/layout/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slice/productsSlice";
import ProductCard from "../component/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(state);
  return (
    <Stack direction="row" sx={{ justifyContent: "space-around" }}>
      <Box>
        <SideBar />
      </Box>
      <Box>
        <ProductCard />
      </Box>
    </Stack>
  );
};

export default Products;
