import React from "react";
import Highcharts from "highcharts";
import { useSelector } from "react-redux";
import HighchartsReact from "highcharts-react-official";

const ChartDisplay = () => {
  const selectedChart = useSelector((state) => state.charts.selectedChart);

  const options = {
    chart: { type: "line" },
    title: { text: `Chart for ${selectedChart.name}` },
    xAxis: {
      type: "datetime",
      title: { text: "Date" },
    },
    yAxis: {
      title: { text: "Celsius °C" },
    },
    series: [
      {
        name: selectedChart.name,
        data: selectedChart.dataseries
          .map((point) => [new Date(point.date).getTime(), point.value])
          .sort((a, b) => a[0] - b[0]),
      },
    ],
    accessibility: {
      enabled: false, // Disable the accessibility warning
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ChartDisplay;
