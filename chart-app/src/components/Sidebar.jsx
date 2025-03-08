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
        dispatch(setCharts(data)); // Pass full data to Redux
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [dispatch]);

  useEffect(() => {
    console.log("Charts State:", charts); // Add this log to inspect the state
  }, [charts]);

  const handleChartClick = (chartName) => {
    dispatch(setSelectedChart(chartName)); // Select chart & store its data
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
                selectedChart === chart ? "#8FD9FB" : "transparent",
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
