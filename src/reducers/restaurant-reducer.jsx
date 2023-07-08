import { restaurantConstants } from "../constants/restaurant-constants";
import { cuisineData, restaurantsData } from "../data/restaurant-data";

const { SET_SELECTED_CUISINE, SET_SELECTED_RESTAURANT, SET_SHOW_ADD_REVIEW_MODAL, ADD_REVIEW } = restaurantConstants;

export const restaurantReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_CUISINE:
      return { ...state, selectedCuisine: payload };
    case SET_SELECTED_RESTAURANT:
      return { ...state, selectedRestaurant: payload };
    case SET_SHOW_ADD_REVIEW_MODAL:
      return {...state, showAddReviewModal: payload};
    case ADD_REVIEW:
      return {...state, 
        restaurantsData: state?.restaurantsData?.map(restaurant => restaurant?.id === state?.selectedRestaurant?.id ? 
          ({
          ...restaurant, 
          ratings: [payload, ...restaurant.ratings],
          averageRating: (restaurant.ratings.reduce((acc, {rating}) => acc + Number(rating), 0) + Number(payload.rating)) / (restaurant.ratings.length + 1),
        }) 
        : restaurant),
      }
    default:
      return state;
  }
};

export const initialRestaurant = {
  cuisineData,
  restaurantsData,
  selectedCuisine: {},
  selectedRestaurant: {},
  showAddReviewModal: false
};
