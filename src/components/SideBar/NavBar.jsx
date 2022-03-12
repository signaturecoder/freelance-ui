import clsx from "clsx";
import { AppBar, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/icons-material/AddIcCallRounded";

import { useStyles } from "../../SidebarStyles";

export const NavBarTop = ({ open, onDrawerOpen }) => {
  const classes = useStyles();
  const user = sessionStorage.getItem("user")
  return (
    <>
    {user?<AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>:null}
    </>
  );
};
