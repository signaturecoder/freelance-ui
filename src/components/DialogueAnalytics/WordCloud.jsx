import React, { Fragment } from "react";
import { Box } from "@mui/material";
import ReactWordcloud from "react-wordcloud";

function WordCloud() {
  const data = [
    { text: "Hey", value: 1000 },
    { text: "lol", value: 1000 },
    { text: "much wow", value: 1000 },
    { text: "very cool", value: 1000 },
    { text: "duck", value: 1000 },
    { text: "Hey", value: 1000 },
    { text: "lol", value: 1000 },
    { text: "much wow", value: 1000 },
    { text: "very cool", value: 1000 },
    { text: "duck", value: 1000 },
    { text: "Hey", value: 1000 },
    { text: "lol", value: 1000 },
    { text: "much wow", value: 1000 },
    { text: "very cool", value: 1000 },
    { text: "duck", value: 1000 },
    { text: "Hey", value: 1000 },
    { text: "lol", value: 1000 },
    { text: "much wow", value: 1000 },
    { text: "very cool", value: 1000 },
    { text: "duck", value: 1000 },
    { text: "Hey", value: 1000 },
    { text: "lol", value: 1000 },
    { text: "much wow", value: 1000 },
    { text: "very cool", value: 1000 },
    { text: "duck", value: 1000 },
    { text: "Hey", value: 1000 },
    { text: "lol", value: 1000 },
    { text: "much wow", value: 1000 },
    { text: "very cool", value: 1000 },
    { text: "duck", value: 1000 },
    { text: "Hey", value: 1000 },
    { text: "lol", value: 1000 },
    { text: "much wow", value: 1000 },
    { text: "very cool", value: 1000 },
    { text: "duck", value: 1000 },
  ];
  const options = {
    rotations: 2,
    rotationAngles: [0, 0],
  };
  const size = [800, 400];
  return (
    <Fragment>
      <Box className="chart_card_dialog_action">
      <ReactWordcloud
          // callbacks={callbacks}
          options={options}
          size={size}
          words={data}
        />
      </Box>
    </Fragment>
  );
}
export default WordCloud;
