import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import {
  RestaurantProvider,
  useRestaurant,
} from "./contexts/restaurant-context.jsx";

export { useRestaurant };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <RestaurantProvider>
        <App />
      </RestaurantProvider>
    </Router>
  </React.StrictMode>
);
