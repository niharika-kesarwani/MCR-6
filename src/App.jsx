import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Home } from "./pages/Home";
import { RestaurantDetail } from "./pages/RestaurantDetail";
import { useRestaurant } from "./main";
import { AddReviewModal } from "./modals/AddReviewModal";
import { restaurantConstants } from "./constants/restaurant-constants";

function App() {
  const {restaurant: {showAddReviewModal}, setRestaurant} = useRestaurant();
  const {SET_SHOW_ADD_REVIEW_MODAL} = restaurantConstants;

  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{ top: "10%" }}
        toastOptions={{ style: { maxWidth: 500 } }}
      />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/restaurant/:restaurantId" element={<RestaurantDetail />}/>
      </Routes>
      {showAddReviewModal && <div className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-[black] bg-opacity-50" onClick={() => setRestaurant({type: SET_SHOW_ADD_REVIEW_MODAL, payload: false})}><AddReviewModal />
        </div>}
    </div>
  );
}

export default App;
