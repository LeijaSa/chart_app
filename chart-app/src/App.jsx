import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import ChartPage from "./components/ChartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCharts } from "./redux/chartSlice";

const App = () => {
  const dispatch = useDispatch();

  // Fetch chart data once when the app loads
  useEffect(() => {
    fetch("./dataseries.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCharts(data)); // Dispatch the chart data to Redux store
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [dispatch]);

  return (
    <Router>
      <div className="container">
        <Sidebar />{" "}
        {/* Sidebar remains visible on all routes, but not on mobile view */}
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/:chartId" element={<ChartPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
