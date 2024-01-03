import Content from './Content'
import Cart from './Cart'
import DataContext from './context/DataContext'
import { useState } from 'react'

export default function Layout() {
  const [cart, setCart] = useState({})

  return (
    <DataContext.Provider value={{ cart, setCart }} >
      <div className="layout">
        <Cart />
        <Content />
      </div>
    </DataContext.Provider>
  )
}
