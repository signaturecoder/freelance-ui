import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import half_arrow_right from "../../images/half_arrow_right.svg";
import "./DashboardCard.css";

const DashboardCard = () => {
  return (
    // <div className="dashboard__card">
      <Box
        sx={{
          display: "flex",
          justifyContent: 'flex-start',
          flexWrap: "wrap",
          "& > :not(style)": {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            paddingLeft: '1.5rem',
            m: 1,
            width: 250,
            height: 150,
            borderRadius: '12px',
            color: '#FFFFFF',
            backgroundColor: '#1B3B6B'
          },
        }}
      >
        <Paper elevation={3}>
          <h4>BEYOND CANDY MOUNTAIN</h4>
          <p>
            Uploaded on <span>21-10-2021</span>
          </p>
          <div className="card__footer">
            <span className="card__footer--percentage">98%</span>
            <span className="card__footer--success">Success</span>
            <span className="card__footer--icon">
              <img className="arrow__icon" src={half_arrow_right} alt="half arrow right"></img>
            </span>
          </div>
        </Paper>
      </Box>
    // </div>
  );
};

export default DashboardCard;
