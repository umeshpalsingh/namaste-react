import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    
    const dispatch = useDispatch();
    function handleClearCart() {
        dispatch(clearCart());
    }

    return (
        <div>
            Cart
            <button className="btn-grey" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.map((item, index) => {
                return <ItemList key={index} itemdata={item} />
            })}
        </div>
    );
}

export default Cart
