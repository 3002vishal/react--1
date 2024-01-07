
import { CDN_URL } from "../utils/constanta";
const Restaurantcard =(prop) => {
    const {resdata} =prop;
  const {
    cloudinaryImageId,
          name,
      cuisines,
      avgRating,
      costForTwo,
    }= resdata.info;
    return (
        <div className="m-4 p-4 w-[200px] rounded-lg">
            <img className="rounded-lg" 
           alt="res-logo"
            src={CDN_URL
            + cloudinaryImageId}
             ></img>
            <h3 className="font-blod py-2">{name}</h3>
            <h4>  {cuisines.join(" , ")}</h4>
            <h4> {avgRating} stars</h4>
            <h4> {costForTwo} </h4>
        </div>
    )
  }
    export const withPromotedLabel= (Restaurantcard)  =>
  {
    return(props) => {
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Is Open </label>
          <Restaurantcard{...props}/>
        </div>
      )
    }
  }

  export default Restaurantcard;