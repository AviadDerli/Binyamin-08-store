import { useState } from 'react'
import Content from './Content'
import Cart from './Cart'
import DataContext from './context/DataContext'
import data from './data'

export default function Layout() {
  const [items, setItems] = useState(data.alcohol)
  const [cart, setCart] = useState({})


  return (
    <DataContext.Provider value={{ cart, setCart }} >
      <div className="layout">
        <Cart />
        <Content items={items} category={'fruits'} />
      </div>
    </DataContext.Provider>
  )
}
