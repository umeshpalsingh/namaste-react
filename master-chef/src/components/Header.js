import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// const logo = new URL('../assets/images/master-chef.png', import.meta.url).href;
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setBtnName] = useState("Login")
    // console.log("Header render");
    
    function handleClick() {
        setBtnName(preValue => {
         return  preValue === "Login" ?  "Logout" : "Login"
        })
    }

    // If no dependency array => useEffect is called on every render
    // If dependency array is empty = [] => useEffect is called on initial render(just once)
    // If dependency array is [btnName] => called everytime btnName is updated

    // useEffect(() => {
    //     console.log("useEffect Called");
    // }, [btnName]);

    const onlineStatus = useOnlineStatus();

    const userData = useContext(UserContext)


    // Subscribing to store using selector
    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems);
    

    return (
    <div className="header">
        <div className="container">
            <div className="h-grid">
                <div className="header-logo">
                    {/* <img src={logo} alt="Logo" /> */}
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Online Status {onlineStatus ? "✅" : "🟥"}</li>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/about">About</Link> </li>
                        <li> <Link to="/contact">Contact</Link> </li>
                        <li> <Link to="/grocery">Grocery</Link> </li>
                        <li> <Link to="/cart">Cart - ({cartItems.length} Items) </Link> </li>
                        <button className="btn-grey" onClick={handleClick}>{btnName}</button>
                        <li>{userData.loggedInUser}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
    
};

export default Header;