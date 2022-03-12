import React from "react";
import "./DoughnutChart.css";


const DoughnutChart = () => {
  return (

      <div className="svg-item">
        <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
          <circle
            className="donut-hole"
            cx="20"
            cy="20"
            r="15.91549430918954"
            fill="transparent"
          ></circle>
          <circle
            className="donut-ring"
            cx="20"
            cy="20"
            r="15.91549430918954"
            fill="transparent"
            strokeWidth="1.5"
          ></circle>
          <circle
            className="donut-segment donut-segment-2"
            cx="20"
            cy="20"
            r="15.91549430918954"
            fill="transparent"
            strokeWidth="1.5"
            strokeDasharray="83 17"
            strokeDashoffset="75"
          ></circle>
          <g className="donut-text donut-text-1">
            <text y="50%" transform="translate(0, 2)">
              <tspan x="50%" textAnchor="middle" className="donut-percent">
                83%
              </tspan>
            </text>
          </g>
        </svg>
      </div>

  );
};

export default DoughnutChart;
