import React from "react";
import Topbar from "./Topbar";
import AddButton from "./AddButton";

const Content = () => {
  return (
    <div className="content-container">
      <div className="topbar">
        <Topbar />
      </div>

      <div className="content-wrapper">
        <div className="content">
          <h3>No charts created yet!</h3>
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default Content;
