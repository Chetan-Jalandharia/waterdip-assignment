import React, { useState } from "react";

const DateSelector = ({ setDateRange }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    if (name === "start") {
      setStartDate(value);
    } else {
      setEndDate(value);
    }
  };

  const handleFilter = () => {
    setDateRange([startDate, endDate]);
  };

  return (
    <div className="date-picker-container">
      <div>
        <label className="date-picker-label" htmlFor="start-date">
          Start Date:
        </label>
        <input
          type="date"
          name="start"
          min="2015-07-01"
          max="2015-08-09"
          value={startDate}
          onChange={handleDateChange}
          className="date-picker-input"
        />
      </div>
      <div>
        <label className="date-picker-label" htmlFor="end-date">
          End Date:
        </label>
        <input
          type="date"
          name="end"
          min="2015-07-01"
          max="2015-08-09"
          value={endDate}
          onChange={handleDateChange}
          className="date-picker-input"
        />
      </div>
      <button onClick={handleFilter} className="filter-button">
        Filter
      </button>
    </div>
  );
};

export default DateSelector;
