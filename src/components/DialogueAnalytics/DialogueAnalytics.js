import React, { Fragment,useState } from "react";
import { Grid, Typography,Box } from "@mui/material";
import MasterTab from "../HocComponent/masterTab"
import DialogAction from "../DialogueAnalytics/DialogAction"
import Analytics from "../DialogueAnalytics/Analytics"
import WordCloud from "./WordCloud"
import "./dialogueanalytics.css"

export default function DialogueAnalytics() {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
      }
      const headers = [
        { label: 'Word cloud' },
        { label: 'Dialoge vs Action Impact' },
        { label: 'Analytics' },
      ]

      const body = [
        { component: <WordCloud/> },
        { component: <DialogAction/> },
        { component: <Analytics/> },
      ]

  return (
    <Fragment>
      <Grid container item>
        <Grid item md={12} className="dialog_analysis_main">
        <Box p={2} textAlign="left"><Typography className="title_name" variant="h5">Dialogue Analytics</Typography></Box>
        <MasterTab body={body} value={value} handleChange={handleChange} headers={headers}/>
        </Grid>
      </Grid>
    </Fragment>
  );
}
