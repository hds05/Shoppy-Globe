import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { cartItems, emptyCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import { useState } from "react";

function Cart() {

  // State for checkout
  const [showCheckout, setShowCheckout] = useState(false)

  // useSelector for cart product
  const cart = useSelector(cartItems);
  // Dispatch
  const dispatch = useDispatch();

  // Total items in the cart
  const totalItems = cart.length
  // Total Price of all items 
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ).toFixed(2);

  return (
    <>
      {/* if items in cart */}
      {cart.length ? (
        <div className="min-h-screen p-4 md:p-8 relative">
          <div className="flex justify-between items-center mb-6">

            {/* Cart heading with Total Items */}
            <h1 className="text-lg md:text-2xl md:text-3xl font-bold">
              Your Cart ({totalItems} items)
            </h1>

            {/* Button to remove all items from the cart */}
            <button
              onClick={() => dispatch(emptyCart())}
              className="bg-red-500 hover:bg-red-600 text-white p-2 md:px-4 md:py-2 rounded-xl"
            >
              Clear Cart
            </button>
          </div>

          {/* Represent items added to cart */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Display total price of the items in cart */}
          <div className="mt-8 p-6 bg-gray-100 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-semibold">
              Total: ${totalPrice}
            </h2>

            {/* Button for CheckOut */}
            <button onClick={() => setShowCheckout(true)} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-bold cursor-pointer">
              Proceed to Checkout
            </button>

            {
              // Display Checkout component conditionally
              showCheckout && <Checkout setShowCheckout={setShowCheckout} totalPrice={totalPrice} totalItems={totalItems} />
            }
          </div>

        </div>
      ) : (
        // If no item in cart 
        <div className="h-screen flex flex-col justify-center items-center gap-4">
          <img src="/empty-cart.svg" className="w-70 opacity-70" alt="empty" />

          {/* Empty Note */}
          <h1 className="text-xl md:text-2xl font-semibold text-gray-600">
            Your Cart is Empty 🛒
          </h1>

          {/* Link to redirect to Home page */}
          <Link to={'/'} className="bg-green-400 px-4 py-2 rounded-4xl hover:bg-green-500 hover:shadow-[0px_0px_6px_gray] text-white">
            Back to shop
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;