import { useRestaurant } from "../contexts/restaurant-context";
import { PrimaryButton } from "../components/PrimaryButton";
import { DisplayRestaurants } from "../components/DisplayRestaurants";

export const Home = () => {
  const {
    restaurant: { cuisineData },
  } = useRestaurant();

  return (
    <div className="flex items-center flex-col gap-10 my-10">
      <div className="font-bold text-3xl md:text-4xl">Food Ordering App</div>
      <div className="font-bold text-2xl md:text-3xl">Select your Cuisine:</div>

      <ul className="flex flex-wrap gap-5 md:gap-20 px-5 justify-center">
        {cuisineData?.map((cuisine) => (
          <PrimaryButton key={cuisine?.id} cuisine={cuisine} />
        ))}
      </ul>
      <DisplayRestaurants />
    </div>
  );
};
