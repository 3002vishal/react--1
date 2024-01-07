import { useEffect, useState } from "react";
import { menu_url } from "./constanta";
const useRestaurantMenu = (resid) =>{
    const [resinfo, setresinfo ] = useState(null)
    useEffect(() => {
        fetchdata();
    },[])
    const fetchdata =async() =>
    {
        const data=await fetch ( menu_url + resid)
        const json = await data.json(  );
        setresinfo(json.data)
    }
    return (resinfo )
}
export default useRestaurantMenu;