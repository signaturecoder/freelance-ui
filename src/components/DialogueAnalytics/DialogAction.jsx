import React, { Fragment } from 'react'
import { Box, List, ListItemText, ListItem, Grid } from '@mui/material'
import DialogueActionLegend from '../HocComponent/DialogueActionLegend'
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import './dialogueanalytics.css'
function DialogAction() {
  const data = [
    {
      name: 1,
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 4,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 6,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 12,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 19,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 21,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 10,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

  const listItems = [
    { label: '27 EXT. FRONT OF THE SCHOOL - DAY 27' },
    {
      label:
        'Wajda passes by the school bus,overflowing with girls, and sees a handsome YOUNG MAN, (20’s), by a pickup truck, waiting.',
    },
    { lable: 'WAJDA' },
    { lable: 'Are you Abeer’s brother?' },
    { lable: 'YOUNG MAN' },
    { lable: '(smiling)' },
    {
      label:
        '(skeptically) Really? Hmmm. WAJDA (haughtily) You don’t look  like her brother! YOUNG MAN (laughing) Okay, okay here’s 20. Wajda takes the money and sniffs it, making a funny face. WAJDA Even your money reeks of perfume! I’ll have to wash it.',
    },
  ]

  return (
    <Box className="main_card">
      <Box className="chart_card_dialog_action">
        <ResponsiveContainer width="95%" height={300}>
          <ComposedChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            {/* <CartesianGrid stroke="#f5f5f5" /> */}
            <XAxis tickLine={false} axisLine={false} dataKey="" scale="band" />
            <Legend content={<DialogueActionLegend value="Scenes"/>} />
            <YAxis
              tick={false}
              tickLine={false}
              axisLine={false}
              label={{ value: 'Scene length', angle: -90 }}
            />
            <Tooltip />
            <Area dataKey="pv" fill="#f4ede6" stroke="#8884d8" />
            <Line
              dataKey="pv"
              stroke="#FCA13A"
              strokeWidth={2}
              fill="#FFFFFF"
            />
            <Area dataKey="amt" fill="#6B7C98" stroke="#8884d8" />
            <Line
              dataKey="amt"
              stroke="#6B7C98"
              strokeWidth={2}
              fill="#FFFFFF"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </Box>
      <Grid item container className="list_items_container">
        <Grid item md={4} className="sub_item">
          <List
            className="title_name"
            component="nav"
            aria-label="main mailbox folders"
          >
            Cloud Synopsis
          </List>
        </Grid>
        <Grid className="secon_grid" item md={8}>
          <List>
            {listItems.map((ele, key) => {
              return (
                <ListItem key={key} disablePadding>
                  <ListItemText primary={ele.label} />
                </ListItem>
              )
            })}
          </List>
        </Grid>
      </Grid>
    </Box>
  )
}
export default DialogAction
