import React from 'react'
import './ContactUs.css'
import { Typography } from "@mui/material";
import { StyledButton } from "../../components";
import message_icon from "../../images/message_icon.svg";
import phone_icon from "../../images/phone_icon.svg";
import location_icon from "../../images/location_icon.svg";
const ContactUs = () => {
    return (
        <section id="contact" className="contact__section">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          component="div"
          style={{ wordWrap: "break-word", width: "100%" }}
        >
          Contact us
        </Typography>
        <Typography variant="body" align="center" gutterBottom>
          We'd love to hear from you
        </Typography>

        <div className="contact__section--btn">
          <StyledButton variant="outlined" btnName="GET IN TOUCH" />
        </div>

        <div className="contact__section--bottom">
          <span>
            <img
              className="contact__section--bottom-icon"
              src={message_icon}
              alt="message icon"
            ></img>
            <p>info@form.com</p>{" "}
          </span>
          <span>
            <img
              className="contact__section--bottom-icon"
              src={phone_icon}
              alt="phone icon"
            ></img>
            <p> 877-255-7945</p>
          </span>
          <span>
            <img
              className="contact__section--bottom-icon"
              src={location_icon}
              alt="location icon"
              style={{ width: "10px" }}
            ></img>
            <p>36 Stephon Ferry</p>{" "}
          </span>
        </div>
      </section>
    )
}

export default ContactUs
