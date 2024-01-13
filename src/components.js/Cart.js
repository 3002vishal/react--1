import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () =>{
    const cartItems = useSelector((store ) => store.cart.items)
    const dispatch=useDispatch();
    const clearcart= () =>{
        dispatch(clearCart())
    }
    console.log(cartItems, "cartitems")
    return (
        
        <div className="cart ">
            <div className="text-center">
            <h1 className="font-bold  m-4 p-4 text-4xl"> Cart</h1>
            <button className="m-2 p-2 font-bold rounded-lg border border-solid bg-black text-white"
            onClick={clearcart}>clearCart</button>
            </div>
            <Itemlist data={cartItems} />
            
                
        </div>

    )
}
export default Cart;