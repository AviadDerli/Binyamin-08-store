import { useContext } from "react"
import CartContext from "./context/CartContext"

export default function Total() {
  const { cart } = useContext(CartContext)
  let sum = 0;
  Object.values(cart).forEach(c => sum += (c.price * c.qty))
  return (
    <div>
      <h2>{sum.toFixed(2)}</h2>
    </div>
  )
}
