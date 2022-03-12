import React, { Fragment } from "react";
import {
  ComposedChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Box, Typography, Divider } from "@mui/material";
function AnalisisChart({ data, barColors, title }) {
  return (
    <Fragment>
      <Box className="chart_card_anlitics" mt={2}>
        {title ? (
          <Typography className="chart_title" variant="h6">
            {title ? title : null}
          </Typography>
        ) : null}
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
    </Fragment>
  );
}

export default AnalisisChart;
