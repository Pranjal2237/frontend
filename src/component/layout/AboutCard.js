import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { aboutContent } from "../../extra/aboutcontent";

const AboutCard = () => {
  return (
    <Stack justifyContent="center" alignItems="center" marginTop="2.5em">
      <Stack direction="row" gap="3em">
        {aboutContent.map((card) => {
          return (
            <Box
              sx={{
                width: "180px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                p: "13px",
              }}
            >
              <Box sx={{ width: "115px", height: "85px" }}>
                <img
                  src={card.image}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: "bolder" }}>
                  {card.name}
                </Typography>
                <Typography>{card.description}</Typography>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default AboutCard;
