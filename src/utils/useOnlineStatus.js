import {useEffect, useState } from "react";
const useOnlineStaus = () => {
    const [onlineStaus,setonlineStatus] = useState(true)
    useEffect( () => {
        window.addEventListener("offline" , () =>{
            setonlineStatus(false)
        })
        window.addEventListener("online", () => {
            setonlineStatus(true)
        })
    },[])
    return onlineStaus;
}
export default useOnlineStaus;