
export default function Item({ item, cart, setCart }) {
  let { name, emoji, price, id } = item

  const handlePlus = () => {
    let newCart = { ...cart }
    // let cart4 = { "ab12": {...item,qty:1}  , "dsak":{...item,qty:7} }

    // אם קיים המוצר
    if(newCart[id]){
      newCart[id].qty+=1
    }
    else{
      newCart[id] = { ...item, qty: 1 }
    }
    setCart(newCart)
  }

  const handleMinus = () => {
  }

  return (
    <div className='item'>
      <div>{name}</div>
      <div>{emoji}</div>
      <div>{price}</div>
      <div>
        <button onClick={handlePlus}>+</button>
        <span>{0}</span>
        <button onClick={handleMinus} >-</button>
      </div>
    </div>
  )
}
