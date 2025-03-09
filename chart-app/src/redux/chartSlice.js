import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: "charts",
  initialState: {
    charts: [],
    selectedChart: null,
  },
  reducers: {
    setCharts: (state, action) => {
      state.charts = action.payload.map((chart, index) => ({
        chartId: index + 1, // Numeric ID
        name: chart.name, // Name of the chart
        dataseries: chart.dataseries, // Store dataseries
      }));
    },
    setSelectedChart: (state, action) => {
      state.selectedChart = action.payload; // Storing the whole chart object
    },
    addChart: (state, action) => {
      const newChart = action.payload;
      const maxId =
        state.charts.length > 0
          ? Math.max(...state.charts.map((chart) => chart.chartId))
          : 0;
      newChart.chartId = maxId + 1;
      state.charts.push(newChart);
    },
  },
});

export const { setCharts, setSelectedChart, addChart } = chartSlice.actions;
export default chartSlice.reducer;
