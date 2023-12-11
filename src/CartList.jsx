import { useContext } from "react"
import CartContext from "./context/CartContext"
import Item from "./Item"

export default function CartList() {
    const { cart } = useContext(CartContext)

    return (
        <div>
            {Object.values(cart).map(c => <Item item={c} key={c.id}/> )}
        </div>
    )
}
