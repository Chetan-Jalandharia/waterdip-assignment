
import React from "react";
import Chart from "react-apexcharts";

const ColumnChart = ({ data }) => {
  const countryData = data.reduce((acc, row) => {
    acc[row.country] =
      (acc[row.country] || 0) +
      (parseInt(row.adults) + parseInt(row.children) + parseInt(row.babies));
    return acc;
  }, {});

  const chartData = {
    series: [
      {
        name: "Visitors",
        data: Object.values(countryData),
      },
    ],
    options: {
      chart: {
        type: "bar",
      },
      xaxis: {
        categories: Object.keys(countryData),
      },
      title: {
        text: "Number of Visitors Per Country",
        align: "left",
      },
    },
  };

  return (
    <div className="chart">
      <Chart
        classname="chart column-chart"
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ColumnChart;
