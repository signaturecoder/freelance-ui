import React from "react";
import './StrokeLine.css'
const StrokeLine = ({title, color, fillPercentage}) => {

  let fillValue = (320 * fillPercentage/100 ) ;

  return (
    <div className="module">
      <svg width="450px" height="25px" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <text x="0" y="15" fill="#ffffff">{title}</text>
        <line className="stroke" x1="160" x2="400" y1="10" y2="10" />
        <line className="stroke-1" x1="160" x2={fillValue} y1="10" y2="10" style={{stroke: `${color}`}}/>
      </svg>
    </div>
  );
};

export default StrokeLine;
