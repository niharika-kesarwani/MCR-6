/* eslint-disable react/prop-types */
import StarBorderIcon from "@mui/icons-material/StarBorder";

export const RatingCard = ({ ratingData }) => {
  const { rating, comment, pp, revName } = ratingData;

  return (
    <div className="border-gray-500 border-b-2 p-2">
      <div className="flex gap-3 items-center">
        <div className="h-10 w-10 rounded-full">
          <img src={pp} className="fh-full w-full rounded-full" />
        </div>
        <div className="font-bold grow">{revName}</div>
        <div className="flex items-center gap-1 border-2 px-2 py-1 rounded-lg bg-green-700 text-yellow-400">
          <div className="font-bold">{rating}</div>
          <div>
            <StarBorderIcon />
          </div>
        </div>
      </div>
      <div>{comment}</div>
    </div>
  );
};
