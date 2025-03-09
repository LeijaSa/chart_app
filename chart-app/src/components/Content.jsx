import React from "react";
import Topbar from "./Topbar";
import AddButton from "./AddButton";
import { useSelector } from "react-redux";

const Content = () => {
  const charts = useSelector((state) => state.charts.charts);
  return (
    <div className="content-container">
      <div className="topbar">
        <Topbar />
      </div>

      <div className="content-wrapper">
        <div className="content">
          {charts ? (
            <h3>Select a chart!</h3>
          ) : (
            <>
              <h3>No charts created yet!</h3>
              <AddButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
