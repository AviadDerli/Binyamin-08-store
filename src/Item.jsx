import { useContext, useState } from 'react'
import CartContext from './context/CartContext'
import { Link } from 'react-router-dom'

export default function Item({ item, isInCart }) {
  let { name, price, emoji, id } = item

  const { cart, setCart } = useContext(CartContext)

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
  const handleRemove = (id) => {
    let copied = { ...cart }
    delete copied[id]
    setCart(copied)
  }

  return (
    <div className={'item' + (isInCart ? ' item-cart':'')}>
      <div className='recycle' onClick={() => handleRemove(id)}>
        {isInCart && <span>❌</span>}
      </div>
        <div className={isInCart && 'item-cart'} style={{ cursor: 'pointer' }}>
      <Link to={'/item/' + id}>
          <div>{name}</div>
          <div>{emoji}</div>
          <div>{price}</div>
      </Link>
        </div>
      <div className={isInCart && 'btn-cart'}>
        <button onClick={() => handlePlus(id)}>+</button>
        <span>{cart[id]?.qty || 0}</span>
        <button onClick={() => handleMinus(id)}>-</button>
      </div>
    </div>

  )
}
