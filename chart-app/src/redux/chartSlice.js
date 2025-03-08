import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  charts: [], // This will store the chart names
  selectedChart: null, // New state for selected chart
};

const chartSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {
    setCharts: (state, action) => {
      state.charts = action.payload; // Set the chart names in the state
    },
    setSelectedChart: (state, action) => {
      state.selectedChart = action.payload;
    },
  },
});

// Export the action and reducer
export const { setCharts, setSelectedChart } = chartSlice.actions;
export default chartSlice.reducer;
