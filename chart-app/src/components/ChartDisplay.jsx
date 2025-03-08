import React from "react";
import Highcharts from "highcharts";
import { useSelector } from "react-redux";
import HighchartsReact from "highcharts-react-official";

const ChartDisplay = () => {
  const selectedChart = useSelector((state) => state.charts.selectedChart);
  const selectedChartData = useSelector(
    (state) => state.charts.selectedChartData
  );

  // Render Highcharts only when chartData is available
  if (!selectedChartData) return <p>Select a chart to display.</p>;

  const options = {
    chart: { type: "line" },
    title: { text: `Chart for ${selectedChart}` },
    xAxis: {
      type: "datetime",
      title: { text: "Date" },
    },
    yAxis: {
      title: { text: "Celsius °C" }, // Add the Y-axis title here
    },
    series: [
      {
        name: selectedChart,
        data: selectedChartData.map((point) => [
          new Date(point.date).getTime(),
          point.value,
        ]),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ChartDisplay;
