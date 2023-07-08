import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RestaurantDetail } from "./pages/RestaurantDetail";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/restaurant/:restaurantId" element={<RestaurantDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
