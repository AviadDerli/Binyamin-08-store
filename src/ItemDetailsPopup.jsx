import { useContext, useEffect, useState } from "react"
import CartContext from "./context/CartContext"

export default function ItemDetailsPopup({itemId}) {
  const {cart,setCart} = useContext(CartContext)

  const [item, setItem] = useState({})
  let { name, price, emoji, id } = item //from server's object
  
  useEffect(() => {
    fetch('https://jbh-mockserver.onrender.com/items/' + itemId)
      .then(r => r.json())
      .then(data => {
        setItem(data)
      })
  }, [])

  const handlePlus = (id) => {
    let copied = { ...cart }
    if (cart[id]) {
      copied[id].qty += 1
    }
    else {
      copied[id] = { ...item, qty: 1 }
    }
    setCart(copied)
  }
  const handleMinus = (id) => {
    if (!cart[id]) return;
    let copied = { ...cart }
    if (copied[id].qty > 1) {
      copied[id].qty -= 1
    }
    else {
      delete copied[id]
    }
    setCart(copied)
  }
  return (
    <div>
      <h2>{id} | {name}</h2>
      <h1>{emoji}</h1>
      <h4>{price}</h4>
      <div>
        <button onClick={() => handlePlus(id)}>+</button>
        <span>{id && (cart && cart[id]? cart[id].qty : 0)}</span>
        <button onClick={() => handleMinus(id)}>-</button>
      </div>
    </div>
  )
}
