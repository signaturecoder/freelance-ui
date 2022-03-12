import React, { Fragment } from "react";
import { Box, Grid, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import "./index.css";
import { styled } from "@mui/material/styles";
import Accordian from "../HocComponent/Accordian"

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

function OverView() {
  // over_view_card_content
  const data = [
    { value: 71, label: "Scenes" },
    { value: 71, label: "Snippets" },
    { value: 71, label: "Dialog Only" },
    { value: 71, label: "Action Only" },
  ];

  const progressingCard = [
    { label: "Top 10 Roles by % of Script Scenes" },
    { label: "Top 10 Roles by % of Dialog Spoken" },
    { label: "Role Dialog Sentiment Scores" },
  ];
  const headerTitle = [
    { name: "Roles", color: "#FF7676", value: 30 },
    { name: "Scenes (Of 71)", color: "#DDC22D", value: 50 },
    { name: "Snippets (Of 510)", color: "#FCA13A", value: 80 },
    { name: "Positive", color: "#02A515", value: 60 },
  ];
  const subTitles = [
    {
      name: "Roles",
      scenes: "Scenes (Of 71)",
      roleValue: "Maggie",
      feedBack: "Positive",
    },
  ];

  const headers = [
    { id: 1, label: "Cue" },
    { id: 2, label: "Gender" },
    { id: 3, label: "Type" },
    { id: 4, label: "Logline" },
  ];

  const values = [
    {
      label: "Nicolas Ford",
      noOfscenes: "Male",
      Contribution: "Minor",
      text:"US air force flyboy"
    },
    {
      label: "Nicolas Ford",
      noOfscenes: "Male",
      Contribution: "Minor",
      text:"US air force flyboy"
    },
    {
      label: "Nicolas Ford",
      noOfscenes: "Male",
      Contribution: "Minor",
      text:"US air force flyboy"
    },
  ];

  const ProgresserBar = ({ headerTitle }) => {
    return (
      <>
        {headerTitle.map((ele,key) => {
          return (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={2}
              key={key}
            >
              <Box className="sub_title" pl={1}>
                {ele.name}
              </Box>
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
      <Box className="over_view_main">
        <Grid item container>
          {data.map((element, key) => {
            return (
              <Grid item md={3} key={key}>
                <Box className="md_3_main">
                  <Typography className="value_content" variant="h3">
                    {element.value}
                  </Typography>
                  <Typography className="sub_value_content" variant="h6">
                    {element.label}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box mt={2} className="over_view_main">
        <Grid item container>
          {progressingCard.map((ele, j) => {
            return (
              <Grid key={j} item md={4}>
                <Box pt={2} pb={2} className="page_headers">
                  {ele.label}
                </Box>
              </Grid>
            );
          })}
        </Grid>
        {subTitles.map((ele,l) => {
          return (
            <Grid item container key={l}>
              <Grid item md={4}>
                <Box
                  pl={2}
                  pr={2}
                  display="flex"
                  justifyContent="space-between"
                >
                  <span className="sub_title">Roles</span>{" "}
                  <span className="sub_title">Scenes (Of 71)</span>
                </Box>
                <ProgresserBar headerTitle={headerTitle} />
              </Grid>
              <Grid item md={4}>
                <Box
                  pl={2}
                  pr={2}
                  display="flex"
                  justifyContent="space-between"
                >
                  <span className="sub_title">Roles</span>{" "}
                  <span className="sub_title">Snippets (Of 71)</span>
                </Box>
                <ProgresserBar headerTitle={headerTitle} />
              </Grid>
              <Grid style={{ textAlign: "left" }} item md={4}>
                <span className="sub_title">Positive</span>
                <Box pt={2}>
                  <Grid item md={8}>
                    <BorderLinearProgress
                      style={{ background: "02A515" }}
                      variant="determinate"
                      value={50}
                    />
                  </Grid>
                </Box>
                <Box className="sub_title" pt={1}>
                  Neutral
                </Box>
                <Box pt={2}>
                  <Grid item md={8}>
                    <BorderLinearProgress
                      style={{ background: "02A515" }}
                      variant="determinate"
                      value={50}
                    />
                  </Grid>
                </Box>
                <Box className="sub_title" pt={1}>
                  Negative
                </Box>
                <Box pt={2}>
                  <Grid item md={8}>
                    <BorderLinearProgress
                      style={{ background: "02A515" }}
                      variant="determinate"
                      value={50}
                    />
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          );
        })}
      </Box>
      <Accordian headers={headers} data={values}/>
    </Fragment>
  );
}

export default OverView;
