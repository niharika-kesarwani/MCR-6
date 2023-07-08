import { useRestaurant } from "../main";
import { RatingCard } from "../components/RatingCard";

export const Reviews = () => {
  const {
    restaurant: {
      selectedRestaurant: { ratings },
    },
  } = useRestaurant();

  return (
    <div className="flex flex-col gap-5">
      <div className="text-2xl font-bold">Reviews</div>
      <ul className="flex flex-col gap-3">
        {ratings?.map((rating, index) => (
          <RatingCard ratingData={rating} key={index} />
        ))}
      </ul>
    </div>
  );
};
