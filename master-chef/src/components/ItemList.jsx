import { IMG_URL } from "../utils/constants";
// import { FaStar } from "react-icons/fa";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ itemdata }) => {
    // console.log(itemdata);

    const { name, price, defaultPrice,   description, imageId, ratings } = itemdata;

//   console.log(name, price, description, imageId);

// console.log(itemdata);

  const dispatch = useDispatch();
  function handleAddItem(itemdata) {
    dispatch(addItem(itemdata));
  }

  return (
    <div className="m-roll" data-testid="fooditems">
      <div className="m-item-img">
        <img src={IMG_URL + imageId} alt="food" />
        <button className="add_to_cart" onClick={() => handleAddItem(itemdata)}>Add</button>
      </div>
      <div className="item-detail">
        <h4 className="item-name">{name}</h4>
        <p className="item-price">₹{price / 100 || defaultPrice / 100}</p>
        <p className="item-description">{description}</p>
      </div>
    </div>
  );
};

export default ItemList;
