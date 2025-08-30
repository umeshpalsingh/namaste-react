import RestaurantCard, {withVegLabel} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Body = () => {
    
  const [originalList, setOrignalList] = useState([]);

  const [restList, setRestList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const {loggedInUser, setUserInfo} = useContext(UserContext);

  // Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)
  // console.log("Body Rerenders");
  
  const RestaurantCardVeg = withVegLabel();

  function filterTopRestro() {
    const filteredList = restList.filter(
      (res) => Number(res.info.avgRating) >= 4.5
    );
    setRestList(filteredList);
  }

  function clearFilter() {
    setRestList(originalList);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);

    const json = await data.json();

    // Optional Chaining
    setRestList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setOrignalList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  if (restList.length === 0) {
    return <Shimmer />;
  }

  // console.log(restList);

  return (
    <div className="body">
      <section className="search-section">
        <div className="container">
          <div className="search">
            <input
              type="text"
              name="search"
              data-testid="search-input"
              placeholder="Search Restaurant"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              data-testid="search-btn"
              id="search"
              onClick={() => {
                // Filter the restaurant cards and update the UI
                const updatedList = originalList.filter(res => {
                    const lowerCase = res.info.name.toLowerCase();
                    const search = searchText.toLowerCase();
                    return lowerCase.includes(search);
                });
                setRestList(updatedList);
                setSearchText("");
              }}
            >
              Search
            </button>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Change Context"
              value={loggedInUser}
              onChange={(e) => setUserInfo(e.target.value)}
            />
          </div>
          <div className="filter">
            <button className="btn-grey" data-testid="toprated-btn" onClick={filterTopRestro}> 
              Top Restaurants
            </button>
            <button className="btn-grey btn-orange" onClick={clearFilter}>
              Clear
            </button>
          </div>
        </div>
      </section>
      <section className="restaurant-section">
        <div className="container">
          <div className="res-container">
            {restList.map((restaurant, index) => (
              <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                {restaurant.info.veg ? <RestaurantCardVeg restaurant={restaurant} /> : <RestaurantCard restaurant={restaurant} />}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
