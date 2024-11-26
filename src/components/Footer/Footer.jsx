import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { Translate } from "@mui/icons-material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#1A1A19",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "gold",
            pt: "3vh",

            "& svg": {
              mx: 1,
              cursor: "pointer",
              fontSize: { xs: "1.5rem", sm: "1.5rem", md: "2.5rem" },
            },
            "& svg:hover": {
              fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },

              transition: "0.5s ease-in-out",
              color: "white",
            },
            alignItems: "center",
          }}
        >
          <EmailIcon sx={{}} />

          <CallIcon />
          <FacebookIcon />
          <XIcon />
        </Box>
        <Box>
          <Typography
            sx={{ color: "gold", py: "3vh", textAlign: "center" }}
            fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
          >
            &copy; All Right Reserved || 2024 Health Service
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
