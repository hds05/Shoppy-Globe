import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty, removeFromCart } from "../utils/cartSlice";

function CartItem({ item }) {

    const dispatch = useDispatch()
    return (
        <>
            <div className="border p-2">
                <div>
                    <img src={item.thumbnail} alt={item.title} loading="lazy" />
                </div>
                <h1>{item.title}</h1>
                <div className="flex gap-2">
                    <h1>Quantity: </h1>
                    <button onClick={() => dispatch(decreaseQty(item.id))}>
                        -
                    </button>
                    <p> {item.quantity}</p>
                    <button onClick={() => dispatch(increaseQty(item.id))}>
                        +
                    </button>
                </div>
                <button className="border" onClick={() => dispatch(removeFromCart(item.id))}>
                    remove from cart
                </button>
            </div>

        </>
    )
}

export default CartItem;