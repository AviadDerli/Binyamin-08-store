let items = [{ id: "32sa" }, { id: "sda" }]
let item = {
    id: "asdas",
    price: 6.4,
    emoji: "🍕",
    name: "pizza"
}
// option 1
let cart = [{ ...item, qty: 1 }]

// option 2
let cart2 = [{ id: item.id, qty: 1 }]

// option 3
let cart3 = { id: qty }

// option 4 !!!!
let cart4 = { "ab12": {...item,qty:1}  , "dsak":{...item,qty:7}}


export default function Cart() {
    return (
        <div>Cart</div>
    )
}
