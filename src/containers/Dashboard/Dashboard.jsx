import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { DashboardCard, StyledButton, StyledFileInput } from "../../components";
import Profile from "../../components/HocComponent/Profile"
import "./Dashboard.css";

const drawerWidth = 240;

const renderDashboardCards = () => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8].map((card, index) => (
    <DashboardCard key={index} />
  ));
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [filename, setFilename] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleFileInputChange = (e) => {
    const [file] = e.target.files;
    const { name: fileName } = file;
    setFilename(fileName);
  };


  const drawer = (
    <div>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h4 className="dashboard__logo">AI Movies</h4>
        <p>Screenplay Analytics</p>
      </Toolbar>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="drawer__content__container">
        <div className="dashboard__header">
          <Box textAlign="right">
            <Profile/>
          </Box>
        </div>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Dashboard" {...a11yProps(0)} />
            <Tab label="Upload New Script" {...a11yProps(0)} />
          </Tabs>

          <TabPanel value={value} index={0}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {renderDashboardCards()}
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="script__movies__wrapper">
            <div className="script__movies__top--section">
                  <p>Paste your script or upload a document:</p>
                  <StyledFileInput 
                  color="secondary"
                   inputLabel="Upload a pdf/doc/text"
                   onChange={handleFileInputChange}
                   filename={filename}
                  />
                </div>
              <div className="script__movies__wrapper--inner">
                
                <div>
                  {" "}
                  <TextareaAutosize
                    aria-label="empty textarea"
                    minRows={15}
                    placeholder="Paste your script here..."
                    style={{
                      width: "95%",
                      background: "#6B7C98",
                      padding: "0.5em",
                    }}
                  />
                </div>
                <div style={{ margin: "1em auto" }}>
                  <StyledButton variant="contained" btnName="Start Analysis" className="script__btn "/>
                </div>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
  );
}

export default Dashboard;
