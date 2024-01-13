import { useState } from "react";
import { LOGO_URL } from "../utils/constanta";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const onlineStatus = useOnlineStaus();
  const [btnName, setbtnName] = useState("login");
  const cartitems = useSelector((store) => store.cart.items  )
  //console.log(cartitems,"cartitems")
  return (
    <div className=" flex bg-pink-200 ">
      <div className="w-[50%]">
        <img className="w-[100px] h-[100px]" src={LOGO_URL}></img>
      </div>
      <div className="flex w-[50%]">
        <ul className="flex w-[100%] justify-evenly p-10px m-10"> 
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about"> About us</Link>
          </li>
          <li className="font-bold">
            <Link to="/contact" >Contact us</Link>
          </li>
          <li>
          <Link to="/cart" className="font-bold text-xl">Cart({cartitems.length} )</Link>
  
            </li>
          <button
            className="login-button"
            onClick={() => {
              if (btnName == "login") {
                setbtnName("logout");
              } else {
                setbtnName("login");
              }
              console.log("logout");
            }}
          >
            {" "}
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
