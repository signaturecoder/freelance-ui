import React, { useState } from "react";
import clsx from "clsx";
import { useTheme } from "@mui/styles";
import { Drawer, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import { Login, SignUp } from "./components";
import { MenuSettings } from "./components/SideBar/MenuSettings";
import { useStyles } from "./SidebarStyles.jsx";
import { Screen } from "./components/SideBar/Screen";
import Locationanalytics from "./components/LocationAnalytics/LocationAnalytics.jsx"
import CharacterAnalytics from "./components/CharacterAnalytics/CharacterAnalytics"
import Emotionanalytics from "./components/Emotionanalytics/Emotionanalytics"
import DialogueAnalytics from "./components/DialogueAnalytics/DialogueAnalytics";
import {HomePage,ScreenPlayAnalytics} from "./containers"
import "./App.css";

const user = sessionStorage.getItem("user");
const location = window.location.pathname

const MenuBurguer = ({ theme, onDrawerClose }) => {
  return (
    <div className="logo_title">
      <Typography className="site_title" variant="h5">
        AI MOVIES
      </Typography>
      <Typography className="">BEYOND CANDY MOUNTAIN</Typography>
    </div>
  );
};

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        {/* {console.log(!location ==="/")} */}
        {!user && location !=="/" && location !=="/home" && location !== "/screenplay"? (
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <MenuBurguer theme={theme} onDrawerClose={handleDrawer} />
            <Divider />
            <MenuSettings />
          </Drawer>
        ) : null}
        <Switch>
          <Route path="/ScriptAnalysis/Locationanalytics" key="/ScriptAnalysis/Locationanalytics">
            <Screen Screen={Locationanalytics} label="/ScriptAnalysis/Locationanalytics" />
          </Route>
          <Route path="/ScriptAnalysis/Dialogueanalytics" key="/ScriptAnalysis/Dialogueanalytics">
            <Screen Screen={DialogueAnalytics} label="/ScriptAnalysis/Dialogueanalytics" />
          </Route>
          <Route path="/ScriptAnalysis/Characteranalytics" key="/ScriptAnalysis/Characteranalytics">
            <Screen Screen={CharacterAnalytics} label="/ScriptAnalysis/Characteranalytics" />
          </Route>
          <Route path="/ScriptAnalysis/Emotionanalytics" key="/ScriptAnalysis/Emotionanalytics">
            <Screen Screen={Emotionanalytics} label="/ScriptAnalysis/Emotionanalytics" />
          </Route>
          <Route path="/screenplay" key="/ScreenPlayAnalytics" component={ScreenPlayAnalytics}/>
          <Route exact path="/login" >
              <Login />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/home">
              <HomePage />
            </Route>
          {routes.map((item,key) => {
            if (!item.children) {
              return (
                <Route path={item.path} key={key}>
                  <Screen
                    Screen={item.component}
                    label={item.title.toUpperCase()}
                  />
                </Route>
              );
            }
          })}
        </Switch>
      </div>
    </Router>
  );
}
