import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty, removeFromCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

function CartItem({ item }) {

    // Dispatch to send action to redux store
    const dispatch = useDispatch();

    // Calculation of total price in respect of items quantity
    const totalPrice = (item.price * item.quantity).toFixed(2);

    return (
        <>
            {/* whole cart item is clickable and on Click navigate to Product Detail Page */}
            <Link to={`/product/${item.id}`} className="flex flex-col justify-between gap-4 bg-white rounded-3xl shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-4 hover:shadow-[0px_4px_18px_rgba(0,0,0,0.15)] transition">

                {/* image of the Product */}
                <div className="flex justify-center items-center rounded-3xl shadow-[0px_0px_3px_black]">
                    <img
                        src={item.thumbnail}
                        alt={item.title}
                        loading="lazy"
                        className="w-[120px] h-[120px] object-cover "
                    />
                </div>

                {/* Product detail */}
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                            {/* product title */}
                            <h1 className="text-lg md:text-xl font-bold text-gray-800">
                                {item.title}
                            </h1>

                            {/* product category */}
                            <p className="text-sm text-gray-500 capitalize">
                                {item.category}
                            </p>

                            {/* product brand */}
                            <p className="text-sm text-gray-500">
                                Brand: {item.brand}
                            </p>
                        </div>

                        {/* Button to remove item from cart */}
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                dispatch(removeFromCart(item.id))
                            }}
                            className="text-red-500 border border-red-400 px-3 py-1 rounded-xl hover:bg-red-500 hover:text-white transition cursor-pointer text-sm w-fit"
                        >
                            Remove
                        </button>
                    </div>


                    <div className="flex items-center gap-3 mt-1">

                        {/* Display item price */}
                        <p className="text-xl font-bold text-green-600">
                            ${item.price}
                        </p>

                        {/* Display item discount percentage */}
                        {item.discountPercentage && (
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-lg">
                                {item.discountPercentage}% OFF
                            </span>
                        )}
                    </div>

                    {/* Quantity of the item */}
                    <div className="flex items-center gap-3 mt-2">
                        <p className="font-medium text-gray-700">Quantity:</p>

                        <div className="flex items-center border rounded-xl overflow-hidden">

                            {/* Button to decrease the quantity */}
                            <button
                                onClick={() => dispatch(decreaseQty(item.id))}
                                className="px-3 py-1 text-lg hover:bg-gray-100 transition cursor-pointer"
                            >
                                -
                            </button>

                            {/* Item's quantity */}
                            <span className="px-4 py-1 border-x">
                                {item.quantity}
                            </span>

                            {/* Button to increase the quantity */}
                            <button
                                onClick={() => dispatch(increaseQty(item.id))}
                                className="px-3 py-1 text-lg hover:bg-gray-100 transition cursor-pointer"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* item's stock */}
                    <p className={`text-sm font-medium mt-1 ${item.stock > 0 ? "text-green-600" : "text-red-500"
                        }`}>
                        {/* if item's stock greater than 0 then in stock else out of stock */}
                        {item.stock > 0
                            ? `${item.stock} items available`
                            : "Out of stock"}
                    </p>

                    {/* Total price of per item */}
                    <div className="mt-3 flex justify-between items-center border-t pt-3">
                        <p className="text-gray-600">
                            Total for this item:
                        </p>

                        <h2 className="text-xl font-bold text-gray-800">
                            ${totalPrice}
                        </h2>
                    </div>
                </div>
            </Link>

        </>
    );
}

export default CartItem;