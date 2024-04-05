import React, { useEffect } from "react";
import Nav from "./Components/Nav";
import Card from "./Components/Card";
import Chart from "./Components/Chart";
import { Route, Routes } from "react-router-dom";
import Upload from "./Components/Upload";

const App = () => {
  return (
    <div>
      <Nav />
      {/* <div className="card_container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="chart_container">
        <Chart />
      </div> */}

      <Upload />
    </div>
  );
};

export default App;
