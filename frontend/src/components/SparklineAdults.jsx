import React from 'react';
import Chart from 'react-apexcharts';

const SparklineAdults = ({ data }) => {
    const totalAdults = data.map(row => Number(row.adults));
    const series = [{ name: 'Adults', data: totalAdults }];

    const options = {
        chart: {
            type: 'line',
            sparkline: { enabled: true },
            height: 100,
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        colors: ['#008FFB'],
        title: {
            text: 'Total Adult Visitors',
            align: 'left',
            style: { fontSize: '14px', color: '#333' }
        },
        xaxis: { crosshairs: { width: 1 } },
        yaxis: { show: false },
        tooltip: { shared: true, intersect: false },
    };

    return (
        <div className="sparkline-chart chart">
            <Chart options={options} series={series} type="line" height="100%" />
        </div>
    );
};

export default SparklineAdults;
