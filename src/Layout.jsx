import { useEffect, useState } from 'react'
import Content from './Content'
import Cart from './Cart'
import DataContext from './context/DataContext'

export default function Layout() {
  const [cart, setCart] = useState()
  useEffect(()=>{
    if(location.pathname === '/')
    location.href='/categories'
  },[])
  useEffect(()=>{
    if(cart)localStorage.setItem('cart', JSON.stringify(cart))
    else setCart(JSON.parse(localStorage.getItem('cart')))
  },[cart])
  return (
    <DataContext.Provider value={{ cart, setCart }} >
      <div className="layout">
        <Cart />
        <Content />
      </div>
    </DataContext.Provider>
  )
}
