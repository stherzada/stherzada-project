import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav/Nav";
import Card from "./components/Body/Card";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Nav />
    <div className="container-cards">
      <Card title={"Stherzada"} label={"É braba"} />
      <Card title={"Hanniel_1227"} label={"É brabo"} />
      <Card title={"Matth_math"} label={"É brabo"} />
      <Card title={"Lulkita"} label={"É brabo"} />
      <Card title={"Chefe_master"} label={"É brabo"} />
      <Card title={"yManuzera"} label={"É brabo"} />
    </div>
  </React.StrictMode>
);
