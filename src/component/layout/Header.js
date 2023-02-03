import React from "react";
import logo from "../../images/logo.png";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import Profile from "../Profile";

const Header = () => {
  const state = useSelector((state) => state);

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        position: "sticky",
        zIndex: "10",
        background: " #A020F0",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" height={80}></img>
      </Link>
      <Stack
        direction="row"
        spacing={5}
        sx={{ ">a": { textDecoration: "none", color: "black" } }}
      >
        <Link to="/">
          <Typography>Home</Typography>
        </Link>
        <Link to="/products">
          <Typography>Products</Typography>
        </Link>
        <Link to="/contact">
          <Typography>Contact</Typography>
        </Link>
        <Link to="/about">
          <Typography>About</Typography>
        </Link>
        {state?.userLogin?.data==null ? (
          <Box sx={{ display: "flex", ">a": { textDecoration: "none" } }}>
            {" "}
            <Link to="/login">
              <Button
                sx={{
                  background: "white",
                  color: "black",
                  "&:hover": { background: "white" },
                  textTransform: "none",
                  fontWeight: "700",
                }}
              >
                LOG IN
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                sx={{
                  background: "white",
                  color: "black",
                  "&:hover": { background: "white" },
                  textTransform: "none",
                  fontWeight: "700",
                }}
              >
                REGISTER
              </Button>
            </Link>
          </Box>
        ) : (
          <Box sx={{ display: "flex", ">a": { textDecoration: "none" } }}>
          <Profile/>
          </Box>
        )}
      </Stack>
      <SearchBar />
    </Stack>
  );
};

export default Header;
