import React, { Fragment } from "react";
import { Typography, Box} from "@mui/material";
import "./hoc.css"

function Title({ title,openHook,getValue,Icon,subTitle }) {
  return (
    <Fragment>
      <Typography className="title_name" variant="h6">{title?title:""}</Typography>
      <Typography className="title_name" variant="h6">{subTitle?subTitle:""}</Typography>
      <Box teaxAlign="left" display="flex" alignItems="center">
        {openHook?openHook:""}
        {Icon?<img
          onClick={getValue}
          className="icon_align"
          src={Icon}
          alt="Kiwi standing on oval"
        />:null}
      </Box>
    </Fragment>
  );
}
export default Title;
