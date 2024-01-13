import Itemlist from "./Itemlist";
import { useState } from "react";
const Restaurnatcategories= ({data,showval,setshowitems}) =>{

    const [count,setcount]=useState(1);
    var val=showval;

    const list = data?.itemCards;
    const handleclick = () =>
    {

      if(count%2 == 1){
        setshowitems()
          }
       else
       {val=false;}
    setcount(count+1); 
    console.log(count,"count"); 
    }
    //console.log(list,"list items")
    return(
        <div>
        <div className=" w-6/12 mx-auto my-3 bg-gray-200 p-4 flex justify-between" >
            <span className="font-bold text-xl"> {data.title}  ({list .length})</span>
            <span onClick={handleclick} className="cursor-pointer">⬇️</span>   
        </div>
        {val && <Itemlist data ={list}/>
        

        }
    
         </div>

    )
}
export default Restaurnatcategories;