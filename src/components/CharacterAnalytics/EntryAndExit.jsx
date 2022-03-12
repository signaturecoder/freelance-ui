import { Box, Grid } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";

function EntryAndExit() {
  const [dummyValue, setDummyValue] = useState([]);
  const [statusDots, setStatusDots] = useState([]);
  useEffect(() => {
    const values = [];
    for (var i = 1; i < 25; i++) {
      values.push(i);
    }
    setDummyValue(values);

    const dotVariable = [];
    for (var i = 0; i < 25; i++) {
      dotVariable.push(<DotContent/>);
    }
    setStatusDots(dotVariable);
  }, []);

  const DotContent = () => {
    return <div className="dot_content"></div>;
  };

  const data = [
    { name: "Nicolas Ford", value: "10" },
    { name: "Nicolas Ford", value: "10" },
    { name: "Nicolas Ford", value: "10" },
  ];

  return (
    <Fragment>
      <Grid item container>
        <Grid item md={2}>
          Roles
        </Grid>
        <Grid item md={1}>
          Entry
        </Grid>
        <Grid item md={1}>
          Exit
        </Grid>
        <Grid item md={8}>
          <Box>
            {dummyValue.map((ele, i) => {
              return (
                <span className="contentValues" key={i}>
                  {ele}
                </span>
              );
            })}
          </Box>
        </Grid>
      </Grid>
      {data.map((ele,key) => {
        return (
          <Box key={key} className="making_dots">
            <Grid item container>
              <Grid item md={2}>
                {ele.name}
              </Grid>
              <Grid item md={1}>
                {ele.value}
              </Grid>
              <Grid item md={1}>
                {ele.value}
              </Grid>
              <Grid item md={8}>
                <Box display="flex" justifyContent="space-evenly" className="dots_align">
                  {statusDots.map((ele, i) => {
                    return (
                      <span className="contentValues" key={i}>
                        {ele}
                      </span>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </Box>
        );
      })}
      {/* <DotContent /> */}
    </Fragment>
  );
}
export default EntryAndExit;
