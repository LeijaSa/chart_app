import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedChart } from "../redux/chartSlice";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const ChartList = ({ searchTerm }) => {
  const dispatch = useDispatch();

  // Fetch charts from Redux store
  const charts = useSelector((state) => state.charts.charts);
  const selectedChart = useSelector((state) => state.charts.selectedChart);

  // If searchTerm is null or empty, show all charts
  const filteredCharts = searchTerm
    ? charts.filter((chart) =>
        chart.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : charts; // Return all charts if no search term

  const handleChartClick = (chart) => {
    dispatch(setSelectedChart(chart));
  };

  return (
    <List>
      {filteredCharts.map((chart) => (
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
