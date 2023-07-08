/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { FoodCard } from "./FoodCard";

export const RestaurantCard = ({ restaurant }) => {
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
  } = restaurant;

  return (
    <div key={id} className="flex flex-col gap-6 hover:cursor-pointer" onClick={() =>navigate(`/restaurant/${id}`)}>
      <div className="text-2xl">Dishes by {name}</div>
      <ul className="flex flex-wrap gap-5">
        {menu?.map((food, index) => (
          <FoodCard key={index} food={food} restaurantName={name} />
        ))}
      </ul>
    </div>
  );
};
