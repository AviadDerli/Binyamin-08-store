import { useState } from 'react'
import Content from './Content'
import Cart from './Cart'
import DataContext from './context/DataContext'

export default function Layout() {
  const [cart, setCart] = useState({})

console.log(location.pathname);
  return (
    <DataContext.Provider value={{ cart, setCart }} >
      <div className="layout">
        <Cart />
        <Content />
      </div>
    </DataContext.Provider>
  )
}
