import CartList from "./CartList";
import Total from "./Total";

export default function Cart() {
  return (
    <div className="cart">
      <h3>Cart</h3>
      <span>🗑</span>
      <CartList />
      <Total/>
    </div>
  )
}
