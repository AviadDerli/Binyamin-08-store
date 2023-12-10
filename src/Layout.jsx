import { useEffect, useState } from 'react'
// import Cart from './Cart'
import Content from './Content'

export default function Layout() {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('https://jbh-mockserver.onrender.com/fruits')
      .then(r => r.json())
      .then(data => {
        setItems(data)
      })
  }, [])

  return (
    <div>
      <Content items={items} />
      {/* <Cart /> */}
    </div>
  )
}
