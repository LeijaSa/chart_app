import React from "react";
import { useSelector } from "react-redux";
import Topbar from "./Topbar";
import AddButton from "./AddButton";
import ChartDisplay from "./ChartDisplay";

const Content = () => {
  const selectedChart = useSelector((state) => state.charts.selectedChart);

  return (
    <>
      <div className="topbar">
        <Topbar />
      </div>
      <div className="content">
        {selectedChart ? (
          // If a chart is selected, display it
          <div className="chart-container">
            <ChartDisplay />
          </div>
        ) : (
          // If no chart is selected, show a message
          <div>
            <h3>No charts created yet!</h3>
            <AddButton />
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
