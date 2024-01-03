import { useEffect, useState } from "react"
import Item from "./Item"
import { useParams } from "react-router";

export default function ItemList() {

    let {categoryName} = useParams()
    const [items,setItems] = useState([])

    useEffect(()=>{
        fetch('https://jbh-mockserver.onrender.com/categories/'+categoryName)
        .then(j => j.json() )
        .then(data=>setItems(data))
    },[])


    return (
        <div>
            <div id="itemList">
                {items
                    .map(f => <Item key={f.id} item={f} />)}
            </div>
        </div>
    )
}
