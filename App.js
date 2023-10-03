import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import { DatePicker } from "antd";

import HomePage from "./components/HomePage/HomePage";
import AutocompleteSearch from "./AutoCompleteSearch";
import { Route, Routes } from "react-router-dom";
import StockPage from "./StockPage";
function App() {
  return (
    <div className="App">
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route path="/stock/:symbol" element={<StockPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
