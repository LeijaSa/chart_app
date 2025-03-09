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
  const charts = useSelector((state) => state.charts.charts);
  const selectedChart = useSelector((state) => state.charts.selectedChart);

  const [menuAnchor, setMenuAnchor] = useState(null);
  const [selectedMenuChartId, setSelectedMenuChartId] = useState(null);

  const handleMenuClick = (event, chartId) => {
    event.stopPropagation(); // Prevents ListItem click when clicking on the menu
    setMenuAnchor(event.currentTarget);
    setSelectedMenuChartId(chartId);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setSelectedMenuChartId(null);
  };

  const handleEdit = () => {
    console.log("Edit chart with ID:", selectedMenuChartId);
    handleMenuClose();
  };

  const handleDelete = () => {
    console.log("Delete chart with ID:", selectedMenuChartId);
    handleMenuClose();
  };

  const filteredCharts = searchTerm
    ? charts.filter((chart) =>
        chart.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : charts;

  const handleChartClick = (chart) => {
    console.log("Chart clicked:", chart);
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            to={`/${chart.chartId}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              flexGrow: 1,
            }}
          >
            <ListItemText primary={chart.name} />
          </Link>

          <IconButton
            edge="end"
            aria-label="more"
            onClick={(event) => handleMenuClick(event, chart.chartId)}
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}

      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
        sx={{ zIndex: 1300 }}
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
    </List>
  );
};

export default ChartList;
