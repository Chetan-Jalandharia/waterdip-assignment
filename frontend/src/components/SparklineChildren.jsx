import React from 'react';
import Chart from 'react-apexcharts';

const SparklineChildren = ({ data }) => {
    const totalChildren = data.map(row => Number(row.children));
    const series = [{ name: 'Children', data: totalChildren }];

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
        colors: ['#FF4560'],
        title: {
            text: 'Total Children Visitors',
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

export default SparklineChildren;
