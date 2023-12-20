import { useContext } from "react"
import DataContext from "./context/DataContext"

export default function CartItem({ item}) {
    let { name, emoji, price, id } = item
    const {cart,setCart} = useContext(DataContext)

    const handlePlus = () => {
        let newCart = { ...cart }
        if (newCart[id]) {
            newCart[id].qty += 1
        }
        else {
            newCart[id] = { ...item, qty: 1 }
        }
        setCart(newCart)
    }

    const handleMinus = () => {
        if (cart[id]) {
            let newCart = { ...cart }
            if (newCart[id].qty > 1) {
                newCart[id].qty -= 1
            }
            else {
                delete newCart[id]
            }
            setCart(newCart)
        }
    }

    return (
        <div className='item'>
            <div>{name}</div>
            <div>{emoji}</div>
            <div>{price}</div>
            <div>
                <button onClick={handlePlus}>+</button>
                <span>{cart[id]?.qty || 0}</span>
                <button onClick={handleMinus} >-</button>
            </div>
        </div>
    )
}

