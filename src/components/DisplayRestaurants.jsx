import { useRestaurant } from "../main";
import { RestaurantCard } from "./RestaurantCard";

export const DisplayRestaurants = () => {
  const { displayRestaurants } = useRestaurant();

  return (
    <div className="font-bold self-start justify-self-start text-left w-full px-5 lg:px-40 flex flex-col gap-10">
      {displayRestaurants?.map((restaurant) => (
        <RestaurantCard key={restaurant?.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
