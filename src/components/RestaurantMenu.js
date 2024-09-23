import {useState,useEffect} from "react";
import Seamers from "./Seamers";

const RestaurantMenu=()=>{
    const [resMenu,setResMenu]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[]);


    const fetchMenu=async()=>{
        const data= await fetch(
             "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=107452&catalog_qa=undefined&submitAction=ENTER"
        );
        const json=await data.json();
        console.log(json);
        setResMenu(json.data);
    }
    if(resMenu===null) return <Seamers/>;
    const {name,cuisines,costForTwoMessage} = resMenu?.cards[2]?.card?.card?.info;
    const [itemCards] = resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.listItems;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <ul>
                <li>{itemCards[0].card.info.name}</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    );
};
export default RestaurantMenu;