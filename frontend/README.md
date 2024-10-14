
# Hotel Booking Dashboard

This project is a single-page dashboard application built using **React.js**. It visualizes hotel booking data using interactive charts. Users can filter the displayed data based on a selected date range.

## Project Features

- **Time Series Chart**: Displays the total number of visitors per day.
- **Column Chart**: Displays the number of visitors per country.
- **Sparkline Charts**: Displays the total number of adult and child visitors.
- **Date Range Filter**: Allows users to filter the data by selecting a specific date range from **July 1, 2015, to August 9, 2015**.
- **Filter Button**: A button that updates all charts based on the selected date range.
- **Responsive Design**: The charts and UI elements are fully responsive and adapt to various screen sizes.

## Project Setup

### Prerequisites

- **Node.js**: Ensure that you have Node.js installed on your machine. You can download it from [Node.js Official Website](https://nodejs.org/).
- **NPM**: NPM is bundled with Node.js.

### Installation Steps

1. **Clone the Repository**: 
   
   ```bash
   git clone https://github.com/Chetan-Jalandharia/waterdip-assignment
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd frontend
   ```

3. **Install Dependencies**:

   Install all the necessary dependencies using:

   ```bash
   npm install
   ```

4. **Start the Application**:

   Run the following command to start the development server:

   ```bash
   npm run dev
   ```

   This will run the app in development mode. Open [ http://localhost:5173/]( http://localhost:5173/) to view it in your browser.

### Build for Production

To create an optimized build of the project for production, run:

```bash
npm run build
```

This will generate the production-ready files in the `build/` directory.

## Project Components

This project consists of several key components:

### 1. **Dashboard.js**

This is the main component that houses the date selector and charts. It maintains the state for the selected date range and passes the filtered data to the chart components. It handles the logic for updating the charts when the user clicks the `Filter` button or selects a date range.

### 2. **TimeSeriesChart.js**

Displays a time series chart showing the number of visitors per day. The chart is created using **ApexCharts** and is updated dynamically based on the selected date range.

### 3. **ColumnChart.js**

Displays a column chart that shows the number of visitors from different countries. This chart also updates dynamically based on the filtered date range.

### 4. **SparklineChart.js**

There are two instances of this component, one for adults and one for children visitors. It renders small sparkline charts using **ApexCharts** to show aggregate data for adults and children over the selected date range.

### 5. **Date Selector**

This component allows users to select a date range from **July 1, 2015** to **August 9, 2015**. If no range is selected, the charts default to showing data for the first 10 days.

### 6. **Filter Button**

The filter button applies the selected date range to all the charts. Once clicked, the charts update to reflect the data from the selected range.


