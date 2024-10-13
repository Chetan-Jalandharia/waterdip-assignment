import React from "react";
import Chart from "react-apexcharts";

const TimeSeriesChart = ({ data }) => {
  const chartData = {
    series: [
      {
        name: "Visitors",
        data: data.map((row) => ({
          x: new Date(
            `${row.arrival_date_year}-${row.arrival_date_month}-${row.arrival_date_day_of_month}`
          ),
          y:
            parseInt(row.adults) +
            parseInt(row.children) +
            parseInt(row.babies),
        })),
      },
    ],
    options: {
      chart: {
        type: "line",
        zoom: {
          enabled: true,
        },
      },
      xaxis: {
        type: "datetime",
      },
      title: {
        text: "Number of Visitors Per Day",
        align: "left",
      },
    },
  };

  return (
    <div className="chart">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={400}
      />
    </div>
  );
};

export default TimeSeriesChart;
