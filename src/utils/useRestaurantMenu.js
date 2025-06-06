import { useEffect } from "react";
import { useState } from "react";
const useRestaurantMenu=(resId)=>{
     const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        console.log(json);
        setResInfo(json.data);
    }
   

    return resInfo;
}
export default useRestaurantMenu;