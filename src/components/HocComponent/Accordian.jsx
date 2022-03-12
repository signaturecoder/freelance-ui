import React, { Fragment } from "react";
import { Box, Grid } from "@mui/material";

import "../DialogueAnalytics/dialogueanalytics.css";

function Accordian({ headers, data }) {

  return (
    <Fragment>
      <Box pt={2}>
        <Grid item container>
          {headers.map((ele,j) => {
            return (
              <Grid key={j} item md={3}>
                {ele.label}
              </Grid>
            );
          })}
        </Grid>
        {data.map((ele,i) => {
          // console.log(ele);
          return (
            <Grid item container key={i} className="content_item">
              <Grid item md={3}>
                <Box display="flex" justifyContent="space-evenly">
                {ele.background?<Box style={{padding:"15px",background:ele.background}}></Box>:<Box>{i+1}</Box>}
                <Box>{ele.label}</Box>
                </Box>
              </Grid>
              <Grid item md={3}>
                {ele.noOfscenes}
              </Grid>
              <Grid item md={3}>
                {ele.Contribution}
              </Grid>
              <Grid item md={3}>
               <Box className="action_content"> {ele.Action?ele.Action:ele.text}</Box>
              </Grid>
            </Grid>
          );
        })}
      </Box>
    </Fragment>
  );
}

export default Accordian;
