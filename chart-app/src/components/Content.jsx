import AddButton from "./AddButton";
import React from "react";
import Topbar from "./Topbar";

const Content = () => (
  <>
    <div className="topbar">
      <Topbar />
    </div>
    <div className="content">
      <h3>No charts created yet!</h3>
      <AddButton />
    </div>
  </>
);

export default Content;
