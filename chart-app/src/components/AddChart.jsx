import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  DialogActions,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addChart } from "../redux/chartSlice";

const AddChart = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [chartType, setChartType] = useState("Line");
  const [chartName, setChartName] = useState("");
  const [dataSeries, setDataSeries] = useState([{ value: "", date: "" }]);

  const handleAddDataPoint = () => {
    const newData = [...dataSeries, { value: "", date: "" }];
    newData.sort((a, b) => new Date(a.date) - new Date(b.date));
    setDataSeries(newData);
  };

  const handleRemoveDataPoint = (index) => {
    const newData = [...dataSeries];
    newData.splice(index, 1);
    setDataSeries(newData);
  };

  const handleDataChange = (index, field, value) => {
    const newData = [...dataSeries];
    newData[index][field] = value;
    setDataSeries(newData);
  };

  const handleSave = () => {
    if (!chartName) {
      alert("Chart name is required!");
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    for (let point of dataSeries) {
      if (!point.value || !point.date) {
        alert("All data points must have a value and a date.");
        return;
      }

      if (parseFloat(point.value) < -30 || parseFloat(point.value) > 45) {
        alert("Values must be between -30 and 45.");
        return;
      }

      if (point.date >= today) {
        alert("Dates must be in the past.");
        return;
      }
    }

    const newChart = {
      name: chartName,
      dataseries: dataSeries.map((d) => ({
        value: parseFloat(d.value),
        date: d.date,
      })),
      type: chartType,
      ...(chartType === "Line"),
    };

    dispatch(addChart(newChart));
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add New Chart</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Chart Name"
          value={chartName}
          onChange={(e) => setChartName(e.target.value)}
          margin="dense"
        />

        <TextField
          fullWidth
          select
          label="Chart Type"
          value={chartType}
          onChange={(e) => setChartType(e.target.value)}
          margin="dense"
        >
          <MenuItem value="Line">Line</MenuItem>
          <MenuItem value="Bar">Bar</MenuItem>
          <MenuItem value="Pie">Pie</MenuItem>
        </TextField>

        <h4>Data Points</h4>
        {dataSeries.map((data, index) => (
          <div
            key={index}
            style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
          >
            <TextField
              type="number"
              label="Value"
              value={data.value}
              onChange={(e) => handleDataChange(index, "value", e.target.value)}
              sx={{ flex: 1 }}
            />
            <TextField
              type="date"
              value={data.date}
              onChange={(e) => handleDataChange(index, "date", e.target.value)}
              sx={{ flex: 1 }}
            />
            <Button onClick={() => handleRemoveDataPoint(index)} color="error">
              X
            </Button>
          </div>
        ))}
        <Button
          onClick={handleAddDataPoint}
          variant="outlined"
          sx={{ marginTop: "10px" }}
        >
          + Add Data Point
        </Button>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddChart;
