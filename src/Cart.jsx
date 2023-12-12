import { useContext } from "react";
import CartList from "./CartList";
import Total from "./Total";
import CartContext from "./context/CartContext";

export default function Cart() {
  const {setCart} = useContext(CartContext)
  return (
    <div className="cart">
      <h3>Cart</h3>
      <button onClick={()=>setCart({})}>Delete All 🗑</button>
      <CartList />
      <Total/>
    </div>
  )
}
