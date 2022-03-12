import React, { Fragment } from "react";
import AnalisisChart from "../HocComponent/AnalisisChart";
import Title from "../HocComponent/Title";
import CharectorAnaliticsLegend from "../HocComponent/CharectorAnaliticsLegend";
import Profile from "../HocComponent/Profile"
import "../HocComponent/hoc.css";
import { Box, Typography, Divider } from "@mui/material";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

function GenrePredicted() {
  const data = [
    {
      name: "comedy",
      uv: 1397,
      pv: 1098,
      amt: 989,
      cnt: 350,
    },
    {
      name: "Drama",
      uv: 1520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
    },
    {
      name: "Rommance",
      uv: 1400,
      pv: 680,
      amt: 1700,
      cnt: 380,
    },
    {
      name: "Biography",
      uv: 1480,
      pv: 1200,
      amt: 1228,
      cnt: 480,
    },
  ];
  const pieData = [
    { name: "Family Scenes", value: 200, lable: "Scenes 5 Page 6 : Scenes 8" },
    { name: "Kids Scenes", value: 300, lable: "Scenes 5 Page 6 : Scenes 8" },
    { name: "Adult Scenes", value: 100, lable: "Scenes 5 Page 6 : Scenes 8" },
  ];

  const chartIcons = [
    { icon: "https://img.icons8.com/ios/30/000000/standing-man.png" },
    { icon: "https://img.icons8.com/ios-glyphs/30/000000/user--v1.png" },
    { icon: "https://img.icons8.com/ios/30/000000/standing-man.png" },
  ];

  const barColors = ["#FF7676", "#DDC22D", "#FCA13A", "#02A515"];
  const COLORS = ["#ddc22d", "#02a515", "#ff7676"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <>
        {chartIcons.map((ele, key) => {
          // console.log(ele.icon);
          return (
            <svg
              key={key}
              x={x - 12}
              y={y - 12}
              fill="#666"
              textAnchor={"middle"}
              dominantBaseline="central"
              width={24}
              height={24}
              viewBox="0 0 1024 1024"
            >
              <image href={ele.icon} height="100%" width="100%" />
            </svg>
          );
        })}
      </>
    );
  };

  return (
    <Fragment>
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <Title title="Genre Predicted & MPAA Rating" />
        <Profile/>
      </Box>
      <AnalisisChart title="MPAA Rating" data={data} barColors={barColors} />
      <Box className="chart_card" mt={2}>
        <AnalisisChart
          title="Genre Predicted"
          data={data}
          barColors={barColors}
        />
        <Box p={3}>
          <Divider className="devider_color" />
        </Box>
        <Typography className="chart_title" variant="h6">
            Contributing Key Scenes
          </Typography>
        <ResponsiveContainer width="90%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx={200}
              cy={140}
              innerRadius={40}
              outerRadius={110}
              labelLine={false}
              label={renderCustomizedLabel}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              content={<CharectorAnaliticsLegend />}
              layout="vertical"
              verticalAlign="top"
              align="right"
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Fragment>
  );
}

export default GenrePredicted;
