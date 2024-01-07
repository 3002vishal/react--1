import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { menu_url } from "../utils/constanta"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {
    const [dishes,setdishes]  =useState(null)
    
     const {resid}=useParams()
     const menuitem= useRestaurantMenu(resid)
     
     if(menuitem==null)
    { return(<Shimmer/>)}
     const {name , cuisines, costForTwoMessage} = menuitem?.cards[0]?.card?.card?.info;
       const itemcard = (menuitem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)

  console.log(itemcard ,"itemcards");
     
    return (
        <div className="menu"> 
        <h1> {name}</h1>
        <h3>{cuisines}</h3>
        <h2>Menu</h2>
         <ul>
            {itemcard.map((item) => <li>{item.card.info.name}    Rs- {item.card.info.price/100  || item.card.info.defaultPrice/100 }</li>)}
        </ul> 
        </div>
    )
}
export default RestaurantMenu;