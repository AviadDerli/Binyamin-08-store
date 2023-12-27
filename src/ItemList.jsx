import { useEffect, useState } from "react"
import Item from "./Item"
import data from './data'

export default function ItemList({category}) {

    const [items,setItems] = useState([])

    useEffect(()=>{
        setItems(data[category])
    },[])


    console.log(category);
    return (
        <div>
            <div id="itemList">
                {items
                    .map(f => <Item key={f.id} item={f} />)}
            </div>
        </div>
    )
}
