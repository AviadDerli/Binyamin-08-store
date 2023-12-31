import { useEffect, useState } from "react"
import Item from "./Item"

export default function ItemList({category}) {

    const [items,setItems] = useState([])

    useEffect(()=>{
        // /categories/alcohol ['','categories','category']
        fetch('https://jbh-mockserver.onrender.com/categories/'+category.split('/')[2])
        .then(j => j.json() )
        .then(data=>setItems(data))
    },[])


    return (
        <div>
            <div id="itemList">
                {items
                    .map(product =><Item onClick={()=>location.href='/items/'+product.id}key={product.id} item={product} />)}
            </div>
        </div>
    )
}
