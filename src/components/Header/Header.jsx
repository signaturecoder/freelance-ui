import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Typography variant="h6" component="div" className="header__logo">
        <Link to="/">AI MOVIES</Link>
      </Typography>

      <Box
        sx={{
          typography: "body1",
          "& > :not(style) + :not(style)": {
            ml: 2,
          },
          fontSize: "0.8rem",
          color: "white",
        }}
      >
        <a href="#home" underline="none">
          HOME
        </a>
        <a href="#howitworks" underline="none">
          HOW IT WORKS
        </a>
        <a href="#services" underline="none">
          SERVICES
        </a>
        <a href="#pricing" underline="none">
          PRICING
        </a>
        <a href="#research" underline="none">
          OUR RESEARCH
        </a>
        <a href="#contact" underline="none">
          CONTACT
        </a>
        <Link to="/login">LOGIN</Link>
      </Box>
    </div>
  );
};

export default Header;
