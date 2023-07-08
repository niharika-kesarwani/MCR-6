import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useRestaurant } from "../main";
import { restaurantConstants } from "../constants/restaurant-constants";
import { useState } from "react";
import { toast } from "react-hot-toast";

export const AddReviewModal = () => {
  const { setRestaurant } = useRestaurant();
  const { SET_SHOW_ADD_REVIEW_MODAL, ADD_REVIEW } = restaurantConstants;
  const [formDetails, setFormDetails] = useState({});
  const options = ["Select Rating", 1, 2, 3, 4, 5];

  const formHandler = (e) =>
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setRestaurant({ type: SET_SHOW_ADD_REVIEW_MODAL, payload: false });
    if (!formDetails.rating) {
        toast.error("Please select a rating in order to add a review!")
    } else {
        setRestaurant({ type: ADD_REVIEW, payload: {...formDetails, revName: "Niharika", pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZ_Xg9XbpVTth91jSsUrrGzlx_v-YZ8pD4YLfGUR4CAdzq_D-DhN_&s=0"} });
        toast.success("Review added successfully!")
    }
  };

  return (
    <div
      className="mx-2 w-full max-w-xl rounded-lg bg-red-500 p-5 flex flex-col gap-5 text-white"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center gap-5">
        <div
          className="hover:cursor-pointer"
          onClick={() =>
            setRestaurant({ type: SET_SHOW_ADD_REVIEW_MODAL, payload: false })
          }
        >
          <CancelOutlinedIcon />
        </div>
        <div className="font-bold text-2xl md:text-3xl underline grow text-center">
          Add Your Review
        </div>
      </div>
      <form className="flex flex-col gap-5" onSubmit={formSubmitHandler}>
        <div className="flex justify-between">
          <label>Rating: </label>
          <select
            className="text-black p-1"
            name="rating"
            onChange={(e) => formHandler(e)}
          >
            {options?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          <label>Comment:</label>
          <textarea
            type="text"
            name="comment"
            className="text-black py-1 px-3 w-60 h-16 rounded-lg flex-wrap"
            placeholder="Enter comment here..."
            onChange={(e) => formHandler(e)}
          />
        </div>
        <button
          className="self-center bg-white text-black py-2 px-8 font-bold rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
