import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Menu from "./Menu";


//                               props
export default function Content({items}) {
  // let props = {
  //   items : [{},{}]
  // }
  const [displayItems, setDisplayItems] = useState(items)

  useEffect(()=>{setDisplayItems(items)} , [items])

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
      <Menu hanleColor={hanleColor} hanleSearch={hanleSearch} colors={colors} />
      <ItemList displayItems={displayItems} />
    </div>
  )
}
