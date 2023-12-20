import CartItem from "./CartItem";

export default function CartList({ cart, setCart }) {

    return (
        <div className="scroll">
            {Object.values(cart).map(c => <CartItem item={c} cart={cart} setCart={setCart} />)}
        </div>
    )
}
