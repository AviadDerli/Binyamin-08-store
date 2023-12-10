import { useState } from 'react'

export default function Item(props) {
  let {name,price, emoji} = props
  //      state  setState                   state    setState
  const [count, setCount] = useState(0) // [variable, function()]

  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <div className='item'>
      <div>{name}</div>
      <div>{emoji}</div>
      <div>{price}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>{count}</span>
        <button onClick={handleMinus} >-</button>
      </div>
    </div>
  )
}
