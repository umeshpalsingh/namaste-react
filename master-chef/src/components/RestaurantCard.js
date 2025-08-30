import { useContext } from "react";
import { IMG_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { name, avgRating, cloudinaryImageId, sla, locality, cuisines } =
    props.restaurant.info;

    // console.log(props.restaurant);
    

  const {loggedInUser} = useContext(UserContext)

  return (
    <div className="res-card" data-testid="resCard">
      <div className="res-img">
        <img src={IMG_URL + cloudinaryImageId} alt="food" />
      </div>
      <div className="res-content">
        <h3 className="res-title">{name}</h3>
        <div className="rest-card-subtext-container">
          <span className="ratings">{avgRating}</span> |
          <span className="timings">{sla.slaString}</span>
        </div>
        <div className="res-card-descriptions-container">
          <div className="detail cuisine">{cuisines.join(", ")}</div>
          <div className="detail location">{locality}</div>
          <div className="detail location">User: {loggedInUser}</div>
        </div>
      </div>
    </div>
  );
};

export const withVegLabel = () => {
  return (props) => {
    return (
      <div>
        <span className="veg-label">Veg</span>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;
