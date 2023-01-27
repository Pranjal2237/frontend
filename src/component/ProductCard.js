import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { product } from "../extra/productInformation";
import Rating from "@mui/material/Rating";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const StyledButton = styled(Button)({
    minWidth: "0px",
  });
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "350px" }}>
          <Link to="/product/laptop">
            <img
              src={product[0].image}
              alt=""
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Link>
        </Box>
        <Box sx={{}}>
          <Typography sx={{ fontWeight: "bold", color: "#000080" }}>
            {product[0].name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography>Rs. {product[0].price}</Typography>
            <Rating
              name="rating"
              value={product[0].rating}
              readOnly
              sx={{ m: "5px"}}
            />
          </Box>
          <Typography>{product[0].description}</Typography>
          <StyledButton>
            <ShoppingCartOutlinedIcon />
          </StyledButton>
          <StyledButton>
            <FavoriteBorderOutlinedIcon />
          </StyledButton>
          <StyledButton>
            <ZoomInOutlinedIcon />
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
