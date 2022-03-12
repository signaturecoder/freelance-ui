import React, { Fragment } from "react";
import { Box,Link } from "@mui/material";
import Icon from "../../images/Icon ionic-ios-arrow-dropdown.svg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./dialogueanalytics.css";
import {
  ComposedChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Accordian from "../HocComponent/Accordian";
import Title from "../HocComponent/Title";

function Analytics() {
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
    {
      name: "Abusing",
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
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
      background:"#FF7676",
      Action: (
        <Box display="flex" alignItems="center">
          <Link className="why_and_how" href="#">Why & How</Link>
          <ChevronRightIcon />
        </Box>
      ),
    },
    {
      label: "Serious",
      noOfscenes: 1,
      Contribution: "20%",
      background:"#DDC22D",
      Action: (
        <Box display="flex" alignItems="center">
          <Link className="why_and_how" href="#">Why & How</Link>
          <ChevronRightIcon />
        </Box>
      ),
    },
    {
      label: "Serious",
      noOfscenes: 1,
      Contribution: "20%",
      background:"#FCA13A",
      Action: (
        <Box display="flex" alignItems="center">
          <Link className="why_and_how" href="#">Why & How</Link>
          <ChevronRightIcon />
        </Box>
      ),
    },
  ];


  const barColors = ["#FF7676", "#DDC22D", "#FCA13A", "#02A515"];

  const getValue = (e) => {
    console.log(e);
  };
  return (
    <Fragment>
      <Box textAlign="left">
        <Title getValue={getValue} openHook="Opening Hook" Icon={Icon} titel="Contribution to success of screenplay" />
      </Box>
      
      <Box className="main_card">
        <Box className="chart_card_anlitics " mt={2}>
          <ResponsiveContainer width="90%" height={300}>
            <ComposedChart
              layout="vertical"
              width={500}
              height={400}
              data={data}
              margin={{
                left: 90,
              }}
            >
              <XAxis type="number" />
              <YAxis
                dataKey="name"
                type="category"
                scale="band"
                tickLine={false}
                axisLine={false}
              />
              <Tooltip />
              <Bar dataKey="pv" barSize={40} fill="#413ea0">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
                ))}
              </Bar>
            </ComposedChart>
          </ResponsiveContainer>
        </Box>
        <Accordian headers={headers} data={values} />
      </Box>
    </Fragment>
  );
}
export default Analytics;
