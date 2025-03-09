import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: "charts",
  initialState: {
    charts: [],
    selectedChart: null,
  },
  reducers: {
    setCharts: (state, action) => {
      // Generate chartId and store everything in the same array
      state.charts = action.payload.map((chart, index) => ({
        chartId: index + 1, // Numeric ID
        name: chart.name, // Name of the chart
        dataseries: chart.dataseries, // Store dataseries
      }));
    },
    setSelectedChart: (state, action) => {
      state.selectedChart = action.payload; // Storing the whole chart object
    },
  },
});

export const { setCharts, setSelectedChart } = chartSlice.actions;
export default chartSlice.reducer;
