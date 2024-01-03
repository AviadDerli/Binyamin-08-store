import DataContext from "./context/DataContext"
import { useContext, useEffect, useState } from 'react'

export default function ItemDetails({ itemId }) {
  const [item, setItem] = useState({})
  const {name,price,id, emoji} = item
  const { cart, setCart } = useContext(DataContext)

  useEffect(()=>{
    fetch('https://jbh-mockserver.onrender.com/items/'+itemId)
    .then(j => j.json() )
    .then(data=>setItem(data))
},[])

  const handlePlus = () => {
    let newCart = { ...cart }
    // let cart4 = { "ab12": {...item,qty:1}  , "dsak":{...item,qty:7} }

    // אם קיים המוצר
    if (newCart[id]) {
      newCart[id].qty += 1
    }
    else {
      newCart[id] = { ...item, qty: 1 }
    }
    setCart(newCart)
  }

  const handleMinus = () => {
    if (cart[id]) {
      let newCart = { ...cart }
      if (newCart[id].qty > 1) {
        newCart[id].qty -= 1
      }
      else {
        delete newCart[id]
      }
      setCart(newCart)
    }
  }

  return (
    <div className='item'>
      <h1>{name}</h1>
      <h2>{emoji}</h2>
      <h4>{price}</h4>
      <div>
        <button onClick={handlePlus}>+</button>
        <span>{cart[id]?.qty || 0}</span>
        <button onClick={handleMinus} >-</button>
      </div>
    </div>
  )
}
