import { restaurantConstants } from "../constants/restaurant-constants";
import { cuisineData, restaurantsData } from "../data/restaurant-data";

const { SET_SELECTED_CUISINE, SET_SELECTED_RESTAURANT } = restaurantConstants;

export const restaurantReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_CUISINE:
      return { ...state, selectedCuisine: payload };
      case SET_SELECTED_RESTAURANT:
        return { ...state, selectedRestaurant: payload };
    default:
      return state;
  }
};

export const initialRestaurant = {
  cuisineData,
  restaurantsData,
  selectedCuisine: {},
  selectedRestaurant: {}
};
