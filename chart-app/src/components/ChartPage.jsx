import React from "react";
import Topbar from "./Topbar";
import ChartDisplay from "./ChartDisplay";

const ChartPage = () => {
  return (
    <div className="content-container">
      <div className="topbar">
        <Topbar />
      </div>
      <div className="content-wrapper">
        <div className="chart-container">
          <ChartDisplay />
        </div>
      </div>
    </div>
  );
};

export default ChartPage;
