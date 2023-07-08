import { useNavigate, useParams } from "react-router-dom";
import { useRestaurant } from "../main";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Reviews } from "../components/Reviews";
import { restaurantConstants } from "../constants/restaurant-constants";
import { useEffect } from "react";

export const RestaurantDetail = () => {
  const { restaurantId } = useParams();
  const {
    restaurant: { restaurantsData, selectedRestaurant },
    setRestaurant,
  } = useRestaurant();
  const { SET_SELECTED_RESTAURANT } = restaurantConstants;
  const navigate = useNavigate();

  const {
    id,
    name,
    cuisine_id,
    address,
    phone,
    menu,
    ratings,
    averageRating,
    description,
  } = selectedRestaurant;

  useEffect(() => {
    const selectedRestaurant = restaurantsData?.find(
      ({ id }) => id === Number(restaurantId)
    );

    setRestaurant({
      type: SET_SELECTED_RESTAURANT,
      payload: selectedRestaurant,
    });
  }, []);

  return (
    <div className="px-5 lg:px-40 my-10 flex justify-between gap-5 md:gap-16 flex-col md:flex-row">
      <div className="hover:cursor-pointer" onClick={() => navigate("/")}>
        <ArrowBackIcon />
      </div>
      <div className="flex gap-10 justify-between grow flex-col">
        <div className="flex grow w-full gap-5 border-gray-500 border-b-2">
          <div className="flex flex-col pb-5 grow">
            <div className="text-4xl pb-2">{name}</div>
            <div className="text-gray-500">
              {menu
                ?.map(({ name }) => name + ", ")
                .join("")
                .slice(0, -2)}
            </div>
            <div className="text-gray-500">{address}</div>
            <div className="text-gray-500">Average Rating: {averageRating}</div>
          </div>
          <div className="h-min p-2 rounded-lg text-white bg-red-500">
            Add Review
          </div>
        </div>
        <Reviews />
      </div>
    </div>
  );
};
