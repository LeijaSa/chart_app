import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import { useDispatch, useSelector } from "react-redux";
import { setCharts, setSelectedChart } from "../redux/chartSlice"; // Import the actions
import HighchartsReact from "highcharts-react-official";

const ChartDisplay = () => {
  const selectedChart = useSelector((state) => state.charts.selectedChart); // Access the selected chart from Redux
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (selectedChart) {
      // Fetch the full chart data based on the selected chart name
      fetch("./dataseries.json")
        .then((response) => response.json())
        .then((data) => {
          const chart = data.find((item) => item.name === selectedChart); // Find the selected chart data
          if (chart) {
            setChartData(chart.dataseries); // Set the dataseries for the chart
          }
        })
        .catch((error) => console.error("Error loading data:", error));
    }
  }, [selectedChart]); // Fetch chart data when the selected chart changes

  // Render Highcharts only when chartData is available
  if (!chartData) return <p>Select a chart to display.</p>;

  const options = {
    chart: {
      type: "line", // You can change the type as needed (e.g., line, bar, etc.)
    },
    title: {
      text: `Chart for ${selectedChart}`,
    },
    xAxis: {
      type: "datetime",
      title: {
        text: "Date",
      },
    },
    series: [
      {
        name: selectedChart,
        data: chartData.map((point) => [
          new Date(point.date).getTime(),
          point.value,
        ]),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ChartDisplay;
