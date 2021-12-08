import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import App from "./App";
import { Invalid } from "./components";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

ReactDOM.render(
  <Router>    
    <Routes>
      <Route path="/" element={<Navigate to="/search/q=Cat" />} />
      <Route
        path="/search/q=:q"
        element={<App />}
      />
      <Route path="/*" element={<Invalid />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
