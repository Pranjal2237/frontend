import { Stack, Box, Typography, Button } from "@mui/material";
import React from "react";
import contact from "../../images/contactimage.png";

const ContactMail = () => {
  return (
    <Stack
      direction="row"
      marginTop=""
      sx={{
        width: "1100px",
        justifyContent: "space-between",
        ml: "15%",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "500px" }}>
        <Typography sx={{ fontSize: "35px", fontWeight: "bolder", mb: "30px" }}>
          Get In Touch
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          deleniti, aspernatur adipisci laudantium optio hic incidunt voluptas
          est quo consequuntur aliquam.
        </Typography>
        <form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ">input": { height: "35px", mt: "30px",outline:'none' },
            }}
          >
            <Box
              sx={{
                ">input": { height: "35px", width: "230px",outline:'none' },
                display: "flex",
                justifyContent: "space-between",
                mt: "30px",
              }}
            >
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </Box>
            <input type="text" placeholder="Subject" />
            <textarea
              type="text"
              placeholder="Type Your Message"
              style={{ height: "100px",marginTop:'30px',padding:'15px',outline:'none',boxSizing:'border-box' }}
            />
          </Box>
        </form>
        <Button
          sx={{
            textTransform: "none",
            "&:hover": { background: "#191970" },
            background: "#191970",
            color: "white",
            mt: "25px",
          }}
        >
          Send Mail
        </Button>
      </Box>
      <Box sx={{ width: "600px" }}>
        <img
          src={contact}
          alt=""
          style={{ width: "100%", objectFit: "cover" }}
        />
      </Box>
    </Stack>
  );
};

export default ContactMail;
