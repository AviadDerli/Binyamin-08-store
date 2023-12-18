import { useEffect, useState } from "react"
import Item from "./Item"
import { useParams } from "react-router-dom"

export default function ItemList() {

    const { catName } = useParams()
    const [displayItems, setDisplayItems] = useState([])

    useEffect(() => {
        fetch('https://jbh-mockserver.onrender.com/categories/' + catName)
            .then(r => r.json())
            .then(data => setDisplayItems(data))
    }, [])

    return (
        <div id="itemList">
            {displayItems //  replace to state
                .map(f => <Item key={f.id} item={f} />)}
        </div>
    )
}
