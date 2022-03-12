import React from 'react'
import './Footer.css'
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import twitter_icon from "../../images/twitter_icon.svg";
import facebook_icon from "../../images/facebook_icon.svg";
import instagram_icon from "../../images/instagram_icon.svg";
import linkedin_icon from "../../images/linkedin_icon.svg";

const Footer = () => {
    return (
        <footer className="footer__container">
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item md={6}>
            <Typography variant="h6" className="footer__title">
              <strong>AI MOVIES</strong>
            </Typography>
            <Typography
              variant="body"
              component="div"
              wrap="wrap"
              className="footer__description"
              gutterBottom
            >
              AI MOVIES helps filmmakers make intelligent decisions during the
              pre-production stage of different works that include movies, web
              series, music videos, albums, trailers, posters etc.
            </Typography>
            <Typography>
              <img
                className="social__icon"
                src={twitter_icon}
                alt="twitter icon"
              ></img>
              <img
                className="social__icon"
                src={facebook_icon}
                alt="facebook"
              ></img>
              <img
                className="social__icon"
                src={instagram_icon}
                alt="instagram"
              ></img>
              <img
                className="social__icon"
                src={linkedin_icon}
                alt="linked-in icon"
              ></img>
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography>PLATFORM</Typography>
            <Typography variant="caption" display="block" gutterBottom>
              How it works
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Services
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Pricing
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              Free Demo
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography>CONTACT</Typography>
            <Typography variant="caption" display="block" gutterBottom>
              info@form.com
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              882-587-3025
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              6116 Willa River Suite 610
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        <div className="footer__bottom--description">
          <Typography variant="caption" display="block" gutterBottom>
            Terms And Conditions
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            ©2021 Ai Movies | All Right Reserved
          </Typography>
        </div>
      </footer>
    )
}

export default Footer
