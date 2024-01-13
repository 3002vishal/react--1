import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { menu_url } from "../utils/constanta";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Restaurnatcategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const [showitem,setshowitem]  = useState(null)

  const { resid } = useParams();
  const menuitem = useRestaurantMenu(resid);

  if (menuitem == null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    menuitem?.cards[0]?.card?.card?.info;
  const itemcard =
    menuitem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  const categories =
    menuitem?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => (c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    );
  console.log(categories, "catergories");
  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-xl"  > {name}</h1>
      <h3>{cuisines}</h3>
      <h1 className="font-bold my-5 text-lg">Menu</h1>
      <div className="ml-[450px]  text-center border-solid border-black static">
      <ul className=" border-solid border-black">
        {itemcard.map((item) => (
          <li className="font-serif m-2 px-100 flex text-justify ">
           <h1 className="mx-2">▶️</h1> {item.card.info.name} Rs-{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
      </div>
      {
        categories.map((category,index)=> <Restaurnatcategories
         data={category.card.card} 
         showval= {index == showitem ? true : false }

         setshowitems = {() =>{
          setshowitem(index)

          

    
          //console.log(index ,"index")
         }
        
        } />)
      }
      
    </div>
  );
};
export default RestaurantMenu;
