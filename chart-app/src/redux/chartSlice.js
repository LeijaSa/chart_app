import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: "charts",
  initialState: {
    charts: [],
    chartData: {}, // Store full chart data mapped by name
    selectedChart: null,
    selectedChartData: null, // Store selected chart data
  },
  reducers: {
    setCharts: (state, action) => {
      state.charts = action.payload.map((chart) => chart.name); // Store only names
      state.chartData = action.payload.reduce((acc, chart) => {
        acc[chart.name] = chart.dataseries; // Store full data by name
        return acc;
      }, {});
    },
    setSelectedChart: (state, action) => {
      state.selectedChart = action.payload;
      state.selectedChartData = state.chartData[action.payload] || null; // Set selected chart data
    },
  },
});

export const { setCharts, setSelectedChart } = chartSlice.actions;
export default chartSlice.reducer;
