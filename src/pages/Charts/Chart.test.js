import React from "react";
import ReactDOM from "react-dom";
import Charts from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Charts />, div);
});