import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function StyledCheckbox({ label, checked, onBoxChange, fieldName }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            color="secondary"
            name={fieldName}
            checked={checked}
            onChange={onBoxChange}
          />
        }
        label={label}
      />
    </FormGroup>
  );
}
