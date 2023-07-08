/* eslint-disable react/prop-types */
export const FoodCard = ({ food, restaurantName }) => {
  const { name, imgSrc, price, qty } = food;

  return (
    <div className="h-80 w-60 flex flex-col border justify-center rounded-lg overflow-hidden">
      <div className="h-[70%]">
        <img src={imgSrc} className="h-full w-full object-cover" />
      </div>
      <div className="h-[30%] p-3">
        <div className="font-bold">{name}</div>
        <div className="text-gray-400 font-medium">
          Rs. {price} for {qty}
        </div>
        <div className="text-gray-400 font-medium">{restaurantName}</div>
      </div>
    </div>
  );
};
