import ItemList from "./ItemList";


// export default function Content(props) {
//   let {items,cart,setItem} = props
                                       // props            
export default function Content({items,cart,setCart}) {

  return (
    <div>
      <ItemList items={items} cart={cart} setCart={setCart} />
    </div>
  )
}
