import React, { useState } from "react";
import { Link } from 'react-router-dom';
import StyledInput from "../StyledInput/StyledInput";
import StyledCheckbox from "../StyledCheckbox/StyledCheckbox";
import Button from "@mui/material/Button";
import login_logo from "../../images/login_logo.svg";
import google_login_logo from "../../images/google_login_logo.svg";
import facebook_login_logo from "../../images/facebook_login_logo.svg";
import linkedin_login_logo from "../../images/linkedin_login_logo.svg";
import twitter_login_logo from "../../images/twitter_login_logo.svg";
import close_login_icon from "../../images/close_login_icon.svg";
import "./SignUp.css";

function SignUp() {
  const [signupCredentials, setSignupCredentials] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    isCheckboxChecked: false
  });

  const handleInputChange = (evt) => {
    const name = evt.target.name;
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
      setSignupCredentials({
      ...signupCredentials,
      [name]: value,
    });
  };

  const handleSignUpBtn = (evt) => {
    evt.preventDefault();
    console.log(signupCredentials);
  };


  return (
    <div className="sign-up">
      <div className="sign-up__wrapper">
        <div className="sign-up__wrapper--left">
          <h3 className="sign-up--text__align">Sign Up </h3>
          <span className="sign-up--text__align">
            {" "}
            Already user ?<Link className="login__link" to="/login">Login</Link>
          </span>

          <StyledInput
            label="Full Name"
            fieldName="fullname"
            fieldValue={signupCredentials.fullname}
            onInputChange={handleInputChange}
          />
          <StyledInput
            label="Email"
            fieldName="email"
            fieldValue={signupCredentials.email}
            onInputChange={handleInputChange}
          />
          <StyledInput
            label="Password"
            fieldName="password"
            fieldValue={signupCredentials.password}
            onInputChange={handleInputChange}
          />
          <StyledInput
            label="Confirm Password"
            fieldName="confirmPassword"
            fieldValue={signupCredentials.confirmPassword}
            onInputChange={handleInputChange}
          />
          <StyledCheckbox
            label="Keep me logged in"
            fieldName="isCheckboxChecked"
            checked={signupCredentials.isCheckboxChecked}
            onBoxChange={handleInputChange}
          />
          <Button
            className="sign-up__btn"
            variant="contained"
            onClick={handleSignUpBtn}
          >
            Login
          </Button>
          <p>----- Or Sign In With ------</p>
          <div className="icon__container">
            <img className="sign-up__icon" src={google_login_logo} alt="Google Logo"></img>
            <img className="sign-up__icon" src={facebook_login_logo} alt="Facebook Logo"></img>
            <img className="sign-up__icon" src={linkedin_login_logo} alt="LinkedIn Logo"></img>
            <img className="sign-up__icon" src={twitter_login_logo} alt="Twitter Logo"></img>
          </div>
        </div>
        <div className="sign-up__wrapper--right">
          <img className="sign-up__image" src={login_logo} alt="SignUp Logo"></img>
        </div>
        <img src={close_login_icon} className="sign-up__close--btn" alt="SignUp Close Icon"></img>
      </div>
    </div>
  );
}

export default SignUp;
