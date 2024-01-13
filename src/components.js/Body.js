import { useEffect, useState } from "react";
import Restaurantcard,{withPromotedLabel} from "./Restaurantcard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";
function find_restaurant(res) {
  return res.info.avgRating > 4.2;
}

const Body = () => {
  const [listofrestaurant, setlistofrestaurant] = useState([]);
  const [copyrestaurant, setcopyrestaurant] = useState([]);
  const [searchtext, setsearchtext] = useState(" ");
  const Restaurantcardpromoted=withPromotedLabel(Restaurantcard);
  console.log("body rendered");
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9522009&lng=77.7002645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("fetch called");
    setlistofrestaurant(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setcopyrestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
  };
  const onlineStaus = useOnlineStaus();
  if (onlineStaus == false) {
    return (
      <h1>
        looks like you are offlie , please check your internet connectivity{" "}
      </h1>
    );
  }

  if (listofrestaurant.length== 0) {
    return <Shimmer />;
  }
  console.log( listofrestaurant,"listofrestaurant ");
  return (
    <div className="">
      <div className=" rounded-lg border-solid border-blue-500 p-4 m-4 bg-blue-300 ">
        <input
          placeholder="Type to Search..."
          type="text "
          className="h-[40px] w-full text-black px-3"
          // value={searchtext}
          onChange={(e) => {
            setsearchtext(e.target.value);
          }}
        />
        <button
          className="m-2 rounded-md bg-gradient-to-r from-red-500 to-blue-500 px-6 py-4 text-white text-xl"
          onClick={() => {
            const filterdrestaurant = listofrestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );
            setcopyrestaurant(filterdrestaurant);
          }}
        >
          {" "}
          search{" "}
        </button>

        <button
          className="m-2 rounded-md bg-gradient-to-r from-red-500 to-blue-500 px-6 py-4 text-white text-xl"
          onClick={() => {
            const filterlist = listofrestaurant.filter(find_restaurant);
            setcopyrestaurant(filterlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className=" flex flex-wrap">
        {copyrestaurant.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id}>
          { restaurant.info.isOpen ?
              <Restaurantcardpromoted resdata={restaurant}/>
          :
            <Restaurantcard resdata={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
