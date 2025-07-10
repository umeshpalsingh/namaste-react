import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (restId) => {

    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(MENU_API + restId)
        const jsonData = await data.json();
        setRestInfo(jsonData);
    }

    return restInfo;

}

export default useRestaurantMenu;