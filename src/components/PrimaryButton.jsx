import { useRestaurant } from "../main";
import { restaurantConstants } from "../constants/restaurant-constants";

/* eslint-disable react/prop-types */
export const PrimaryButton = ({ cuisine }) => {
  const { setRestaurant } = useRestaurant();
  const { id, name, reviews, averageRating } = cuisine;
  const { SET_SELECTED_CUISINE } = restaurantConstants;

  return (
    <label className="bg-red-500 py-2 px-4 rounded text-white hover:cursor-pointer">
      <input
        key={id}
        type="radio"
        name="cuisine"
        value={name}
        className="hidden"
        onChange={() =>
          setRestaurant({ type: SET_SELECTED_CUISINE, payload: cuisine })
        }
      />{" "}
      {name}
    </label>
  );
};
