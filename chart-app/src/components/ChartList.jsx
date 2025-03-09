import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedChart } from "../redux/chartSlice";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const ChartList = () => {
  const dispatch = useDispatch();

  // Fetch charts from Redux store
  const charts = useSelector((state) => state.charts.charts);
  const selectedChart = useSelector((state) => state.charts.selectedChart);

  console.log("Charts data:", charts); // Debug log: Print charts data to see the structure

  const handleChartClick = (chart) => {
    console.log(`Sidebar ${chart}`);
    dispatch(setSelectedChart(chart));
  };

  return (
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
  );
};

export default ChartList;
