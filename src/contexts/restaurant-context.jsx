/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import {
  initialRestaurant,
  restaurantReducer,
} from "../reducers/restaurant-reducer";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useReducer(
    restaurantReducer,
    initialRestaurant
  );

  const { restaurantsData, selectedCuisine } = restaurant;

  const displayRestaurants = restaurantsData?.filter(
    ({ cuisine_id }) => cuisine_id === selectedCuisine?.id
  );

  return (
    <RestaurantContext.Provider
      value={{ restaurant, setRestaurant, displayRestaurants }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => useContext(RestaurantContext);
