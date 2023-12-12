import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Menu from "./Menu";
import ItemDetails from "./ItemDetails";
import ItemNotFound from "./ItemNotFound";


//                               props
export default function Content({ items }) {

  // load >> check the url >> /item/:id >> take the :id
  //  find item by id 
  // if exist show only ItemDetails component with this item {}
  //  if not exist >> show Not Found
  //  regular url  >> show Menu & ItemList

  const [itemD, setItemD] = useState()
  const [displayItems, setDisplayItems] = useState(items)

  useEffect(() => { setDisplayItems(items) }, [items])

  const getIdFromUrl = () => {
    let url = location.pathname.split('/')
    if (url[1] == 'item' && url[2]) {
      let item = items.find(it => it.id == url[2])
      setItemD(item || {})
    }
  }

  useEffect(() => { getIdFromUrl() })


  const hanleColor = (c) => {
    setDisplayItems(c ? items.filter(f => f.color == c) : items)
  }
  const hanleSearch = (txt) => {
    setDisplayItems(txt ? items.filter(f => f.name.includes(txt)) : items)
  }

  const colors = []
  items.forEach(f => { if (!colors.includes(f.color)) colors.push(f.color) })

  return (
    <div className="content">
      {itemD ?   Object.keys(itemD).length ? <ItemDetails item={itemD} />  : <ItemNotFound/>
      : 
        <>
          <Menu hanleColor={hanleColor} hanleSearch={hanleSearch} colors={colors} />
          <ItemList displayItems={displayItems} />
        </>
      }
    </div>
  )
}
