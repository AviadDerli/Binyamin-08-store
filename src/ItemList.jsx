import Item from "./Item"

export default function ItemList({displayItems}) {

   
    return (
        <div>
            <div id="itemList">
                {displayItems
                    .map(f => <Item key={f.id} name={f.name} price={f.price} emoji={f.emoji} />)}
            </div>
        </div>
    )
}
