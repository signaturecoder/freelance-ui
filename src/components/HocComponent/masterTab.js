import {Tabs,Tab,Box} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {Fragment} from "react"

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const location = window.location.href.split("/")
const useStyles = makeStyles({
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "#02183A",
      height: 3,
    },
    "& .MuiTab-root.Mui-selected": {
      color: location[3]=== "screenplay#howitworks"?"#FFFFF":"#02183A",
      fontWeight: "bold",
      fontSize:"22px"
    },
    "& .css-11xinen-MuiButtonBase-root-MuiTab-root":{
      color: location[3]=== "screenplay#howitworks"?"#FFFFF":"#02183A",
    }
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div role="tabpanel" hidden={value !== index} id={`scrollable-auto-tabpanel-${index}`} aria-labelledby={`scrollable-auto-tab-${index}`} {...other}>
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

const MasterTab = ({ value, handleChange, headers,body }) => {
  const classes = useStyles();
  return (
    <Fragment>
    <Tabs className={classes.tabs} value={value} onChange={handleChange} centered textColor="primary">
      {headers.map((ele, key) => {
        return (
          <Tab
            label={ele.label}
            {...a11yProps(key)}
            key={key}
          />
        );
      })}
    </Tabs>
    {body&&body.map((item, key) => {
        // debugger
        return (
          <TabPanel value={value} index={key} key={key}>
            <div className="tab-child">{item.component}</div>
          </TabPanel>
        )
      })}
    </Fragment>
  );
};

export default MasterTab;
