import Item from "./Item"

export default function ItemList(props) {
  let {items,cart,setCart} = props
   
    return (
        <div>
            <div id="itemList">
                {items
                    .map(f => <Item key={f.id} cart={cart} setCart={setCart} item={f} />)}
            </div>
        </div>
    )
}
