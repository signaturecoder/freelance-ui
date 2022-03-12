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
import "./Login.css";

function Login() {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
    isCheckboxChecked: false
  });
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");

  const handleInputChange = (evt) => {
    const fieldName = evt.target.name;
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
      setLoginCredentials({
      ...loginCredentials,
      [fieldName]: value,
    });
  };


  const handleLoginBtn = (e) => {
    e.preventDefault();
    console.log(loginCredentials);
    // setMessage("");
    // setLoading(true);
  };

 

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__wrapper--left">
          <h3 className="text__align">Sign In </h3>
          <p className="text__align">
            New user ? <Link className="sign-up__link" to="/signup">Sign up</Link>
          </p>

          <StyledInput
            label="Email"
            fieldName="email"
            fieldValue={loginCredentials.email}
            onInputChange={handleInputChange}
          />
          <StyledInput
            label="Password"
            fieldName="password"
            fieldValue={loginCredentials.password}
            onInputChange={handleInputChange}
          />
          <StyledCheckbox
            className="login__checkbox"
            label="Keep me logged in"
            fieldName="isCheckboxChecked"
            checked={loginCredentials.isCheckboxChecked}
            onBoxChange={handleInputChange}
          />
          <Button
            className="login__btn"
            variant="contained"
            onClick={handleLoginBtn}
          >
            Login
          </Button>
          <p>----- Or Sign In With ------</p>
          <div className="icon__container">
            <img
              className="login__icon"
              src={google_login_logo}
              alt="Google Logo"
            ></img>
            <img
              className="login__icon"
              src={facebook_login_logo}
              alt="Facebook Logo"
            ></img>
            <img
              className="login__icon"
              src={linkedin_login_logo}
              alt="LinkedIn Logo"
            ></img>
            <img
              className="login__icon"
              src={twitter_login_logo}
              alt="Twitter Logo"
            ></img>
          </div>
        </div>
        <div className="login__wrapper--right">
          <img className="login__image" src={login_logo} alt="Login Logo"></img>
        </div>
        <img src={close_login_icon} className="login__close--btn" alt="Login Close Icon"></img>
      </div>
    </div>
  );
}

export default Login;
