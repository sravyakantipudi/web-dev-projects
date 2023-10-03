import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StocksData } from "./data";
import { Card } from "antd";

import {
  CaretUpOutlined,
  CaretDownOutlined,
  SlidersOutlined,
  EuroCircleOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import StockChart from "./Chart";
const StockPage = () => {
  const apiKey = "3NVGD41TMOZPTSM9";

  const { symbol } = useParams();
  const [stockData, setStockData] = useState(null);
  const [chartSymbol, setChartSymbol] = useState("");

  useEffect(() => {
    const foundStock = StocksData.find((stock) => stock.symbol === symbol);

    if (foundStock) {
      const {
        symbol,
        currentPrice,
        companyName,
        exchange,
        previousClose,
        dayHigh,
        dayLow,
        volume,
        marketCap,
        peRatio,
        dividendYield,
      } = foundStock;
      setStockData({
        symbol,
        currentPrice,
        companyName,
        exchange,
        previousClose,
        dayHigh,
        dayLow,
        volume,
        marketCap,
        peRatio,
        dividendYield,
      });
      setChartSymbol({ symbol });
    } else {
      console.error("Error: Stock symbol not found in StocksData");
    }
  }, [symbol]);

  if (!stockData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "10px" }}>
      <Card hoverable>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            background: "",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "25px",
                  fontWeight: "700",
                  margin: "0",
                  marginLeft: "0",
                }}
              >
                {" "}
                {stockData.companyName}
              </h2>
              <h1 style={{ fontSize: "12px" }}>{stockData.symbol}</h1>
              <p
                style={{
                  fontWeight: "400",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                The current price:
                <p style={{ color: "green" }}>{stockData.currentPrice}</p>
              </p>
            </div>
          </div>
          <div>
            <div style={{ paddingLeft: "40px", marginTop: "85px" }}>
              <h1 style={{ fontSize: "12px", color: "red" }}>
                Exchange: {stockData.exchange}
              </h1>
              <p style={{ fontSize: "12px" }}>
                Previous Close: {stockData.previousClose}
              </p>
            </div>
          </div>
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <h1 style={{ color: "blue", marginTop: "70px" }}>
                  FAST.ACCURATE.RELIABLE.
                </h1>
              </div>
              <p style={{ fontSize: "10px" }}>
                Never miss an update{" "}
                <a href="#">Click here to subscribe for email-updates</a>
              </p>
            </div>
          </>
        </div>
      </Card>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "40%", marginTop: "20px" }}>
          <Card size="small" title="Metrics" hoverable>
            <h1 style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
              <CaretUpOutlined style={{ color: "green" }} />
              {stockData.dayHigh}
              <p style={{ fontSize: "10px", marginTop: "15px" }}>
                ALL DAY HIGH
              </p>
            </h1>
            <h1 style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
              <CaretDownOutlined style={{ color: "red" }} />
              {stockData.dayLow}
              <p style={{ fontSize: "10px", marginTop: "15px" }}>ALL DAY LOW</p>
            </h1>
          </Card>
        </div>
        <div style={{ width: "35%", marginTop: "20px", height: "50px" }}>
          <Card title="Stats" hoverable>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <EuroCircleOutlined />
              <p style={{ fontSize: "15px" }}>
                {" "}
                Market cap: {""}
                {stockData.marketCap}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <SlidersOutlined />
              <p style={{ fontSize: "15px" }}>
                {" "}
                Volume: {""}
                {stockData.volume}
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              {" "}
              <PieChartOutlined />
              <p style={{ fontSize: "15px" }}>
                {" "}
                PE Ratio: {""}
                {stockData.peRatio}
              </p>
            </div>
          </Card>
        </div>
      </div>
      <div style={{ marginTop: "120px" }}>
        <StockChart />
      </div>
    </div>
  );
};

export default StockPage;
