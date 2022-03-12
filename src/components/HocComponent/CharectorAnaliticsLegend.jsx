import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
const location = window.location.href.split("/")
// console.log(location);
function CharectorAnaliticsLegend({ value, payload }) {
//    console.log(payload);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (payload) {
      const costomiseData = payload.map((ele) => {
        // console.log(ele);
        let obj = {
          color: ele.color,
          value: ele.value,
          lable:ele.lable
        };
        return obj;
      });
      setData(costomiseData);
    }
  }, [payload]);

  return (
    <div>
      {value ? value : ""}
      {payload ? (
        <div className="legend_main">
          {data.map((x,j) => {
            return (
              <Box key={j} display="flex" alignItems="center">
                <div
                  style={{
                    background: x.color,
                    padding: "20px",
                    margin: "5px",
                  }}
                />
                <div className="legend_content">{x.value}</div>
                <div>{x.lable}</div>
              </Box>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default CharectorAnaliticsLegend;
