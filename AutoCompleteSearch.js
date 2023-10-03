import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { StocksData } from "./data";

const AutocompleteSearch = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);
  const searchStocks = (value) => {
    const matchingStocks = StocksData.filter((stock) =>
      stock.companyName.toLowerCase().includes(value.toLowerCase())
    );

    const stockSymbols = matchingStocks.map((stock) => ({
      value: stock.symbol,
      label: stock.companyName,
    }));

    setOptions(stockSymbols);
  };

  const handleSearch = (value) => {
    setQuery(value);
    searchStocks(value);
  };

  return (
    <AutoComplete
      options={options}
      style={{ width: "100%" }}
      onSearch={handleSearch}
      onSelect={(value) => {
        console.log(`Selected stock symbol: ${value}`);
        navigate(`/stock/${value}`);
      }}
    >
      <Input
        placeholder="Search for a stock symbol"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </AutoComplete>
  );
};

export default AutocompleteSearch;
