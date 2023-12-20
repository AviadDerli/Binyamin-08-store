import ItemList from "./ItemList";


// export default function Content(props) {
//   let {items,cart,setItem} = props
                                       // props            
export default function Content({items}) {

  return (
    <div className="content">
      <ItemList items={items} />
    </div>
  )
}
