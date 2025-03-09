import AddButton from "./AddButton";
import Logo from "./Logo";
import SearchBar from "./Searchbar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCharts, setSelectedChart } from "../redux/chartSlice";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const charts = useSelector((state) => state.charts.charts);
  const selectedChart = useSelector((state) => state.charts.selectedChart);

  useEffect(() => {
    fetch("./dataseries.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCharts(data)); // Just dispatch the data, no need to modify chartId here
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [dispatch]);

  const handleChartClick = (chart) => {
    console.log(`Sidebar ${chart}`);
    dispatch(setSelectedChart(chart));
  };

  return (
    <div className="sidebar-container">
      <Logo />
      <SearchBar />
      <AddButton />
      <List>
        {charts.map((chart, index) => (
          <ListItem
            key={chart.chartId}
            onClick={() => handleChartClick(chart)}
            style={{
              cursor: "pointer",
              backgroundColor:
                selectedChart?.chartId === chart.chartId
                  ? "#8FD9FB"
                  : "transparent",
            }}
          >
            <Link
              to={`/${chart.chartId}`} // Use chartId for navigation
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              <ListItemText primary={chart.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
