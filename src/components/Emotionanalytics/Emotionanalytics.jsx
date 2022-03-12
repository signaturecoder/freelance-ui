import React, { Fragment } from "react";
import Title from "../HocComponent/Title";
import AnalisisChart from "../HocComponent/AnalisisChart";
import Accordian from "../HocComponent/Accordian";
import Icon from "../../images/Icon ionic-ios-arrow-dropdown.svg";
import {Box, Link} from "@mui/material"
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


function Emotionanalytics() {
  const data = [
    {
      name: "conversational",
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: "Serious",
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: "Comedy",
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
  ];

  const headers = [
    { id: 1, label: "Dialogue" },
    { id: 2, label: "No. of Scenes" },
    { id: 3, label: "Contribution" },
    { id: 4, label: "Action" },
  ];

  const values = [
    {
      label: "Conversational",
      noOfscenes: 1,
      Contribution: "20%",
      background: "#FF7676",
      Action: (
        <Box display="flex" alignItems="center">
          <Link className="why_and_how" href="#">
            Why & How
          </Link>
          <ChevronRightIcon />
        </Box>
      ),
    },
    {
      label: "Serious",
      noOfscenes: 1,
      Contribution: "20%",
      background: "#DDC22D",
      Action: (
        <Box display="flex" alignItems="center">
          <Link className="why_and_how" href="#">
            Why & How
          </Link>
          <ChevronRightIcon />
        </Box>
      ),
    },
    {
      label: "Serious",
      noOfscenes: 1,
      Contribution: "20%",
      background: "#FCA13A",
      Action: (
        <Box display="flex" alignItems="center">
          <Link className="why_and_how" href="#">
            Why & How
          </Link>
          <ChevronRightIcon />
        </Box>
      ),
    },
  ];

  const barColors = ["#FF7676", "#DDC22D", "#FCA13A", "#02A515"];

  return (
    <Fragment>
      <Title
        title="Emotion Analytics"
        subTitle="Contribution to success of screenplay"
        openHook="Opening Hook"
        Icon={Icon}
      />
     <Box className="main_card">
     <AnalisisChart data={data} barColors={barColors} />
     <Accordian headers={headers} data={values} />
     </Box>
    </Fragment>
  );
}

export default Emotionanalytics;
