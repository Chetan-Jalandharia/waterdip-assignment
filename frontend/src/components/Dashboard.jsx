
import React, { useState, useEffect } from 'react';
import { parse } from 'papaparse';
import TimeSeriesChart from './TimeSeriesChart';
import ColumnChart from './ColumnChart';
import SparklineAdults from './SparklineAdults';
import SparklineChildren from './SparklineChildren';
import DateSelector from './DateSelector';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [dateRange, setDateRange] = useState([null, null]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./data/hotel_bookings_1000.csv');
            const text = await response.text();
            parse(text, {
                header: true,
                complete: (results) => {
                    setData(results.data);
                    setFilteredData(results.data);
                }
            });
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (dateRange[0] && dateRange[1]) {
            const startDate = new Date(dateRange[0]);
            const endDate = new Date(dateRange[1]);
            const filtered = data.filter((row) => {
                const arrivalDate = new Date(`${row.arrival_date_year}-${row.arrival_date_month}-${row.arrival_date_day_of_month}`);
                return arrivalDate >= startDate && arrivalDate <= endDate;
            });
            setFilteredData(filtered);
        } else {
            // Shows the last 10 days of data if no date range is selected
            const today = new Date('2015-08-09');
            const tenDaysAgo = new Date(today);
            tenDaysAgo.setDate(today.getDate() - 10);

            const lastTenDaysData = data.filter((row) => {
                const arrivalDate = new Date(`${row.arrival_date_year}-${row.arrival_date_month}-${row.arrival_date_day_of_month}`);
                return arrivalDate >= tenDaysAgo && arrivalDate <= today;
            });
            setFilteredData(lastTenDaysData);
        }
    }, [dateRange, data]);

    return (
        <div className='dashboard-container'>
            <h1 className='dashboard-title'>Hotel Booking Dashboard</h1>
            <DateSelector setDateRange={setDateRange} />
            {filteredData.length > 0 ? (
                <>
                    <TimeSeriesChart data={filteredData} />
                    <ColumnChart data={filteredData} />
                    <SparklineAdults data={filteredData} />
                    <SparklineChildren data={filteredData} />
                </>
            ) : (
                <p>Loading......</p>
            )}
        </div>
    );
};

export default Dashboard;
