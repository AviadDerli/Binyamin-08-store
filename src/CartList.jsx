import { useContext } from "react";
import CartItem from "./CartItem";
import DataContext from "./context/DataContext";

export default function CartList() {
    const {cart} = useContext(DataContext)

    return (
        <div className="scroll">
            {Object.values(cart).map(c => <CartItem item={c} />)}
        </div>
    )
}
