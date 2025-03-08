import React from "react";
import { IconButton, Typography } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";

const Logo = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconButton edge="start" sx={{ color: "black" }}>
        <ShowChartIcon /> {/* Line chart icon */}
      </IconButton>
      <Typography variant="h6" sx={{ color: "black", marginLeft: 1 }}>
        ChartApp
      </Typography>
    </div>
  );
};

export default Logo;
