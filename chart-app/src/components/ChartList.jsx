import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedChart } from "../redux/chartSlice";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

const ChartList = ({ searchTerm }) => {
  const dispatch = useDispatch();

  // Fetch charts from Redux store
  const charts = useSelector((state) => state.charts.charts);
  const selectedChart = useSelector((state) => state.charts.selectedChart);

  const [anchorEl, setAnchorEl] = useState(null); // State to open/close the menu
  const [selectedChartId, setSelectedChartId] = useState(null); // Track which chart the options are for

  const handleMenuClick = (event, chartId) => {
    setAnchorEl(event.currentTarget);
    //setSelectedChartId(chartId); // Set the selected chart ID for actions
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    console.log("Edit chart with ID:", selectedChartId);
    // Handle the edit logic here
    handleMenuClose();
  };

  const handleDelete = () => {
    console.log("Delete chart with ID:", selectedChartId);
    // Handle the delete logic here
    handleMenuClose();
  };

  // If searchTerm is null or empty, show all charts
  const filteredCharts = searchTerm
    ? charts.filter((chart) =>
        chart.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : charts; // Return all charts if no search term

  const handleChartClick = (chart) => {
    console.log("chart clicked!!");
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

          {/* Three-dot icon to open the menu */}
          <IconButton
            edge="end"
            aria-label="more"
            onClick={(event) => handleMenuClick(event, chart.chartId)}
          >
            <MoreVertIcon />
          </IconButton>
          {/* Menu for Edit and Delete actions */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)} // Menu opens only if anchorEl is set
            onClose={handleMenuClose} // Closes when clicking outside
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </Menu>
        </ListItem>
      ))}
    </List>
  );
};

export default ChartList;
