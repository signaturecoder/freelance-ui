import React from "react";
import "./StyledFileInput.css";

const StyledFileInput = ({ inputLabel, onChange, filename, color }) => {


  return (
    <div className="file-input">
      <input type="file" id="file" accept=".pdf,.doc,.text"className="file" onChange={onChange}/>
      <label htmlFor="file" className={color}>{inputLabel}
      <p className={color === 'primary' ? "file-name-primary" : "file-name-secondary "}>{filename || ""}</p>
      </label>
    </div>
  );
};

export default StyledFileInput;
