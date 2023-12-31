// let items = [{ id: "32sa" }, { id: "sda" }]
// let item = {
//     id: "asdas",
//     price: 6.4,
//     emoji: "🍕",
//     name: "pizza"
// }
// // option 1
// let cart = [{ ...item, qty: 1 }]

// // option 2
// let cart2 = [{ id: item.id, qty: 1 }]

// // option 3
// let cart3 = { id: qty }

// // option 4 !!!!
// let cart4 = { "ab12": {...item,qty:1}  , "dsak":{...item,qty:7}}

import { useContext } from "react";
import CartList from "./CartList";
import Total from "./Total";
import DataContext from "./context/DataContext";

export default function Cart() {
  const { cart, setCart } = useContext(DataContext);

  const calcTotal = () => {
    let total = 0;
    Object.values(cart).forEach((c) => (total += c.price * c.qty));
    return total;
  };
  return (
    <div className="cart">
      Cart
      {cart && (
        <>
          <button
            onClick={() => {
              setCart();
              localStorage.removeItem("cart");
            }}
          >
            clear cart
          </button>
          <CartList />
          <Total total={calcTotal()} />
        </>
      )}
    </div>
  );
}
