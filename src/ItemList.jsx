import Item from "./Item"

export default function ItemList(props) {

   
    return (
        <div>
            <div id="itemList">
                {props.filtered
                    .map(f => <Item key={f.id} name={f.name} price={f.price} emoji={f.emoji} />)}
            </div>
        </div>
    )
}
