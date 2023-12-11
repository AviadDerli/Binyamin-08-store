import { useEffect, useState } from 'react'
import CartContext from './context/CartContext'
import Cart from './Cart'
import Content from './Content'
import Header from './Header'

export default function Layout() {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState({})
  
  useEffect(() => {
    fetch('https://jbh-mockserver.onrender.com/fruits')
      .then(r => r.json())
      .then(data => {
        setItems(data)
      })
  }, [])

  return (
    <div className='layout'>
      <CartContext.Provider value={    {cart,setCart}    }>
        <Header/>
        <Cart />
        <Content items={items} />
      </CartContext.Provider>


    </div>
  )
}
