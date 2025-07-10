import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    console.log(data);

    const title = data?.card?.card?.title;
    const itemsCount = data?.card?.card?.itemCards.length;
    // const {categoryId} = data?.card?.card;
    const {itemCards} = data?.card?.card;
    
    function handleToggle() {
        setShowIndex();
    }

    return (
        <div className="res-cat-box">
            <div className="category-accordion">
                <div className="accordion-header" onClick={() => handleToggle()}>
                    <h2 className="cat-title">{title} ({itemsCount})</h2>
                    <span className="arrow"> {showItems ? <IoIosArrowUp /> : <IoIosArrowDown /> }</span>
                </div>
                {showItems && <div className="accordion-content">
                    {itemCards.map(item => {
                        return <ItemList key={item?.card?.info?.id} itemdata={item?.card?.info} />
                    })}
                </div>} 
            </div>
        </div>
    );
}

export default RestaurantCategory;