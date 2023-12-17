import { useEffect, useState } from 'react'
import CartContext from './context/CartContext'
import Cart from './Cart'
import Content from './Content'
import Header from './Header'

export default function Layout() {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState(JSON.parse(localStorage.cart ?? '{}'))

  useEffect(() => {
    fetch('https://jbh-mockserver.onrender.com/categories/fruits')
      .then(r => r.json())
      .then(data => {
        setItems(data)
      })
  }, [])

  useEffect(() => {
    localStorage.cart = JSON.stringify(cart)
  }, [cart])

  return (
    <div className='layout'>
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        <Cart />
        <Content items={items} />
      </CartContext.Provider>


    </div>
  )
}
