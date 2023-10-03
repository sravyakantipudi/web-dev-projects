import React, { useState, useEffect } from "react";
import {
  CartesianGrid,
  Legend,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "antd";

const generateDummyStockData = () => {
  const startDate = new Date(2023, 0, 1);
  const endDate = new Date(2023, 11, 31);
  const days = [];
  const stockData = [];

  let currentDate = startDate;
  while (currentDate <= endDate) {
    days.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  days.forEach((date) => {
    const open = Math.random() * (200 - 100) + 100;
    const close = Math.random() * (200 - 100) + 100;
    const high = Math.max(open, close) + Math.random() * 10;
    const low = Math.min(open, close) - Math.random() * 10;

    stockData.push({
      timestamp: date.toISOString().split("T")[0],
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
    });
  });

  return stockData;
};

const StockChart = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const dummyData = generateDummyStockData();
    setStockData(dummyData);
  }, []);

  return (
    <Card>
      <div>
        <h2>Stock Chart</h2>
        <LineChart
          width={1200}
          height={400}
          data={stockData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="high" name="High" stroke="#8884d8" />
          <Line type="monotone" dataKey="low" name="Low" stroke="#82ca9d" />
        </LineChart>
      </div>
    </Card>
  );
};

export default StockChart;
