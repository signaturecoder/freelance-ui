import React from "react";
import TextField from "@mui/material/TextField";
import "./StyledInput.css";

const StyledInput = ({ label, fieldName,  fieldValue, onInputChange }) => {
  return (
    <TextField
      className="input__container"
      size="small"
      id="outlined-basic"
      label={label}
      color="secondary"
      variant="outlined"
      name={fieldName}
      value={fieldValue}
      onChange={onInputChange}
    />
  );
};

export default StyledInput;
