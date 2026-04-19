import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty, removeFromCart } from "../utils/cartSlice";

function CartItem({ item }) {
    const dispatch = useDispatch();

    const totalPrice = (item.price * item.quantity).toFixed(2);

    return (
        <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-3xl shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-4 hover:shadow-[0px_4px_18px_rgba(0,0,0,0.15)] transition">
            <div className="flex justify-center items-center md:w-1/5 rounded-3xl shadow-[0px_0px_3px_black]">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    className="w-[120px] h-[120px] object-cover "
                />
            </div>

            <div className="flex-1 flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                        <h1 className="text-lg md:text-xl font-bold text-gray-800">
                            {item.title}
                        </h1>
                        <p className="text-sm text-gray-500 capitalize">
                            {item.category}
                        </p>

                        <p className="text-sm text-gray-500">
                            Brand: {item.brand}
                        </p>
                    </div>

                    <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-red-500 border border-red-400 px-3 py-1 rounded-xl hover:bg-red-500 hover:text-white transition cursor-pointer text-sm w-fit"
                    >
                        Remove
                    </button>
                </div>

                <div className="flex items-center gap-3 mt-1">
                    <p className="text-xl font-bold text-green-600">
                        ${item.price}
                    </p>
                    {item.discountPercentage && (
                        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-lg">
                            {item.discountPercentage}% OFF
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-3 mt-2">
                    <p className="font-medium text-gray-700">Quantity:</p>

                    <div className="flex items-center border rounded-xl overflow-hidden">
                        <button
                            onClick={() => dispatch(decreaseQty(item.id))}
                            className="px-3 py-1 text-lg hover:bg-gray-100 transition cursor-pointer"
                        >
                            -
                        </button>

                        <span className="px-4 py-1 border-x">
                            {item.quantity}
                        </span>

                        <button
                            onClick={() => dispatch(increaseQty(item.id))}
                            className="px-3 py-1 text-lg hover:bg-gray-100 transition cursor-pointer"
                        >
                            +
                        </button>
                    </div>
                </div>

                <p
                    className={`text-sm font-medium mt-1 ${
                        item.stock > 0 ? "text-green-600" : "text-red-500"
                    }`}
                >
                    {item.stock > 0
                        ? `${item.stock} items available`
                        : "Out of stock"}
                </p>

                <div className="mt-3 flex justify-between items-center border-t pt-3">
                    <p className="text-gray-600">
                        Total for this item:
                    </p>

                    <h2 className="text-xl font-bold text-gray-800">
                        ${totalPrice}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default CartItem;