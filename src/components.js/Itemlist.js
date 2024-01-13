import { useDispatch } from "react-redux";
import { img_url } from "../utils/constanta";
import  {addItem}  from "../utils/cartSlice";
const Itemlist = ({ data}) => {
  const dispatch=useDispatch( );
  const handleAddItems= (item) => {
    console.log(item,"items")
    dispatch(addItem(item));
  }
  console.log(data, "right ");
  return (
    <div>
      {data.map((item) => (
        <div className="  justify-between flex  ml-[450px] w-6/12 border border-b-black text-left ">
               <div>
          <span className="font-bold">{item.card.info.name}</span>
          <span className=" m-2 text-lg">Rs-{item.card.info.price /100 || item.card.info.defaultPrice/100}  </span>
          <div className="font-thin"> {item.card.info.description}</div>
       </div>
         
          <button className="font-bold " onClick={() => handleAddItems(item)}> Add+</button>
            <img src={img_url + item.card.info.imageId} 
          
          className="h-16" />
          
        
        </div>
      ))}
    </div>
  );
};
export default Itemlist;
