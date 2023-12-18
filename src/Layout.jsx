import { useEffect, useState } from 'react'
import CartContext from './context/CartContext'
import Cart from './Cart'
import Content from './Content'
import Header from './Header'

export default function Layout() {
  const [cart, setCart] = useState(JSON.parse(localStorage.cart ?? '{}'))


  useEffect(() => { localStorage.cart = JSON.stringify(cart) }, [cart])

  return (
    <div className='layout'>
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        <Cart />
        <Content />
      </CartContext.Provider>


    </div>
  )
}
