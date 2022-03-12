import React, { Fragment } from "react";
import { Avatar, Stack } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import avatar from "../../images/avatar.png";

function Profile() {
  return (
    <Fragment>
      <Stack direction="row" spacing={2} alignItems="center">
        <span className="profile_title"> Andreas B</span>
        <Avatar className="avatar_radius" src={avatar} variant="rounded"/>
        <KeyboardArrowDownIcon/>
      </Stack>
    </Fragment>
  );
}
export default Profile;
