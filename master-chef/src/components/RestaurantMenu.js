import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { IMG_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);

  const { restId } = useParams();

  const resInfo = useRestaurantMenu(restId);

  if (resInfo === null) {
    return <Shimmer page="RestaurantMenu" />;
  }

  console.log(resInfo?.data?.cards[2]?.card?.card?.info);

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    totalRatingsString,
    avgRating,
    sla,
    labels,
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  // const menuItems =
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //     ?.card?.itemCards ||
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card?.itemCards ||
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card?.categories[0].itemCards;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <section className="menu-section">
      <div className="container">
        <div className="cover-res">
          <div className="menu-box">
            <div className="restro-info">
              <h1 className="restro-name">{name}</h1>
              <p className="restro-cuisine">{cuisines.join(", ")}</p>
              <p className="cost-for-two">Average Cost - {costForTwoMessage}</p>
              <p className="restro-address">{labels[1].message}</p>
            </div>
            <div className="other-details">
              <p className="ratings-grid">
                <span className="rating">
                  {avgRating} <FaStar />
                </span>
                <span className="total-ratings">{totalRatingsString}</span>
              </p>
            </div>
          </div>
        </div>
        {categories.map((category, index) => {
          return (
            // CONTROLLED COMPONENT
            <RestaurantCategory
              key={category?.card?.card?.categoryId}
              data={category}
              showItems={showIndex == index ? true : false}
              setShowIndex={() => setShowIndex(showIndex == index ? null : index)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RestaurantMenu;
