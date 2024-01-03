import Content from './Content'
import Cart from './Cart'
import DataContext from './context/DataContext'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export default function Layout({isLogged}) {
  const [cart, setCart] = useState({})
  
  
  const nav=useNavigate()
  useEffect(() => {
    if (!isLogged) nav('/login')
  }, [])

  return (
    <DataContext.Provider value={{ cart, setCart }} >
      <div className="layout">
        <Cart />
        <Content />
      </div>
    </DataContext.Provider>
  )
}
