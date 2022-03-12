import React, { Fragment } from "react";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Title from "../HocComponent/Title";
import Profile from "../HocComponent/Profile";
import { styled } from "@mui/material/styles";
import Icon from "../../images/Icon ionic-ios-arrow-dropdown.svg";
import "./index.css";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function ScreenplayStats() {
  const myData = [
    { value: 71, Icon: "", content: "Project active" },
    { value: 17, Icon: "", content: "Roles" },
    { value: 30, Icon: "", content: "Locations" },
    { value: 1328, Icon: "", content: "Snippets" },
    { value: 510, Icon: "", content: "Dialog" },
    { value: 342, Icon: "", content: "Action" },
  ];

  const dummyData = [
    { name: "Character Gaits", value: 30, color: "#FF7676" },
    { name: "Dialogue Voice", value: 60, color: "#DDC22D" },
    { name: "Dialogue Slang", value: 20, color: "#FCA13A" },
    { name: "Camera Movement", value: 80, color: "#02A515" },
  ];

  const dummyData2 = [
    { name: "Camera Work", value: 30, color: "#02A515" },
    { name: "Character Mood", value: 60, color: "#02A515" },
    { name: "Costumes", value: 20, color: "#02A515" },
    { name: "Situation Emotions", value: 80, color: "#02A515" },
  ];

  const ProgresserBar = ({ dummyData }) => {
    return (
      <>
        {dummyData.map((ele, key) => {
          return (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              pt={1}
              pb={1}
              pr={2}
              key={key}
            >
              <Box className="basic_titles">{ele.name}</Box>
              <Grid md={4} item>
                <BorderLinearProgress
                  style={{ background: ele.color }}
                  variant="determinate"
                  value={ele.value}
                />
              </Grid>
            </Box>
          );
        })}
      </>
    );
  };

  return (
    <Fragment>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Title />
        <Profile />
      </Box>
      <Title title="Screenplay Stats" openHook="Entire Script" Icon={Icon} />
      <Box pt={2}>
        <Grid item container spacing={2}>
          {myData.map((ele, i) => {
            return (
              <Grid key={i} item md={4}>
                <Box className="screenpaly_cards">
                  <Box
                    display="flex"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <Box textAlign="left">
                      <Typography className="values_size">
                        {ele.value}
                      </Typography>
                      <Box className="content_title">{ele.content}</Box>
                    </Box>
                    <Typography className="values_size">{ele.value}</Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Box mt={2} className="Success_Percentage">
          <Box p={1}>
            <Grid item container>
              <Grid item md={3}>
                <Box textAlign="left">
                  <span className="suggestion">Success Percentage</span>
                </Box>
                <Box display="flex" textAlign="center" justifyContent="center" alignItems="center">
                <CircularProgress
                  style={{ height: "130px", width: "90px" }}
                  variant="determinate"
                  value={99}
                />
                  <Box className="progress_value">
                  <span >{99}%</span>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={5}>
                <Box textAlign="left">
                  <span className="suggestion">Key Suggestions:</span>
                </Box>
                <ProgresserBar dummyData={dummyData} />
              </Grid>
              <Grid item md={4}>
                <Box textAlign="left">
                  <span className="suggestion">Great work:</span>
                </Box>
                <ProgresserBar dummyData={dummyData2} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
export default ScreenplayStats;
