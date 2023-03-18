import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slice/loginSlice";

const Login = () => {
  const [user, setuser] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const dispat = useDispatch();

  const handleEmail = (event) => {
    const change = { ...user };
    change.email = event.target.value;
    setuser((user) => ({ ...change }));
  };

  const handlePassword = (event) => {
    const change = { ...user };
    change.password = event.target.value;
    setuser((user) => ({ ...change }));
  };

  const state = useSelector((state) => state);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispat(loginUser(user));
  };

  // useEffect(()=>{
  //   handleSubmit()
  // },[handleSubmit()])

  if (state?.userLogin?.data) {
    navigate("/");
  }

  return (
    <Box
      sx={{
        width: "400px",
        margin: "auto",
        marginTop: "5rem",
        marginBottom: "5rem",
        color: "gray",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        p: "2rem",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{ fontSize: "25px", fontWeight: "700", color: "black" }}
        >
          Login
        </Typography>
        <Typography sx={{}}>Please login using account detail below</Typography>
      </Box>
      <Box marginTop="1.5rem">
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "350px",
              margin: "auto",
              ">input": {
                height: "35px",
                marginTop: "15px",
                outline: "none",
                border: "1px solid gray",
                pl: "10px",
              },
            }}
          >
            <input
              type="email"
              placeholder="Email Address"
              value={user.email}
              onChange={(e) => handleEmail(e)}
            />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => handlePassword(e)}
            />
            <Button
              type="submit"
              sx={{
                background: "#74EDB3",
                color: "white",
                marginTop: "35px",
                "&:hover": { background: "#74EDB3" },
              }}
            >
              Sign In
            </Button>
            <Link
              to="/signup"
              style={{ textDecoration: "none", marginTop: "25px" }}
            >
              <Button
                sx={{ textTransform: "none", width: "100%", margin: "auto" }}
              >
                Don't have an account? Create account
              </Button>
            </Link>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
