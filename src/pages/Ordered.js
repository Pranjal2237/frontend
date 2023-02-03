import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Link } from "react-router-dom";

const Ordered = () => {
  return (
    <Box
      sx={{
        width: "600px",
        textAlign: "center",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        margin: "auto",
        mt: "6.5rem",
        p: "20px",
        ">a": { textDecoration: "none" },
      }}
    >
      <Box sx={{}}>
        <TaskAltIcon
          sx={{
            color: "#191970",
            width: "130px",
            objectFit: "cover",
            height: "70px",
          }}
        />
      </Box>
      <Box>
        <Typography sx={{ fontSize: "30px", fontWeight: "700", mb: "15px" }}>
          Your Order is Completed!
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deleniti, aspernatur adipisci laudantium optio hic incidunt voluptas
          est quo consequuntur aliquam.
        </Typography>
      </Box>
      <Link to="/login">
        <Button
          sx={{
            textTransform: "none",
            background: "#191970",
            color: "white",
            "&:hover": { background: "#191970" },
            mt: "15px",
          }}
        >
          Continue Shopping
        </Button>
      </Link>
    </Box>
  );
};

export default Ordered;
