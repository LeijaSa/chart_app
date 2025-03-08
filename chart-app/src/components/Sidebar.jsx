import AddButton from "./AddButton";
import Logo from "./Logo";
import SearchBar from "./Searchbar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCharts, setSelectedChart } from "../redux/chartSlice";
import { List, ListItem, ListItemText } from "@mui/material";

const Sidebar = () => {
  const dispatch = useDispatch();
  const charts = useSelector((state) => state.charts.charts);
  const selectedChart = useSelector((state) => state.charts.selectedChart);

  useEffect(() => {
    fetch("./dataseries.json")
      .then((response) => response.json())
      .then((data) => {
        const chartNames = data.map((chart) => chart.name); // Extract chart names
        dispatch(setCharts(chartNames)); // Dispatch action to update Redux state
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [dispatch]); // Only run the effect when the component mounts

  useEffect(() => {
    console.log("Charts State:", charts); // Add this log to inspect the state
  }, [charts]); // Only log when charts change

  const handleChartClick = (chartName) => {
    dispatch(setSelectedChart(chartName));
  };

  return (
    <div className="sidebar-container">
      <Logo />
      <SearchBar />
      <AddButton />
      <List>
        {charts.map((chart, index) => (
          <ListItem
            key={index}
            onClick={() => handleChartClick(chart)}
            style={{
              cursor: "pointer",
              backgroundColor:
                selectedChart === chart ? "#8FD9FB" : "transparent", // Apply background color for selected chart
            }}
          >
            <ListItemText primary={chart} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
