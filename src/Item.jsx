
export default function Item({item,cart,setCart}) {
  let {name, emoji, price} = item

  const handleMinus = () => {
  }

  return (
    <div className='item'>
      <div>{name}</div>
      <div>{emoji}</div>
      <div>{price}</div>
      <div>
        <button onClick={() => {}}>+</button>
        <span>{0}</span>
        <button onClick={handleMinus} >-</button>
      </div>
    </div>
  )
}
