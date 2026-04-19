import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { cartItems, emptyCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import { useState } from "react";

function Cart() {

  const [showCheckout, setShowCheckout] = useState(false)

  const cart = useSelector(cartItems);
  const dispatch = useDispatch();

  const totalItems = cart.length  
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ).toFixed(2);
  // window.scrollTo({
  //   top: 0,
  //   behaivor : 'smooth'
  // })

  // function handleCheckout(){
  //   <CheckoutPage />
  // }

  return (
    <>
      {cart.length ? (
        <div className="min-h-screen p-4 md:p-8 relative">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">
              Your Cart ({totalItems} items)
            </h1>

            <button
              onClick={() => dispatch(emptyCart())}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
            >
              Clear Cart
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="mt-8 p-6 bg-gray-100 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4">
            <h2 className="text-xl font-semibold">
              Total: ${totalPrice}
            </h2>

            <button onClick={() => setShowCheckout(true)} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-bold">
              Proceed to Checkout
            </button>
            {
              showCheckout && <Checkout setShowCheckout={setShowCheckout} totalPrice={totalPrice} totalItems={totalItems} />
            }
          </div>

        </div>
      ) : (
        <div className="h-screen flex flex-col justify-center items-center gap-4">
          <img src="/empty-cart.svg" className="w-70 opacity-70" alt="empty" />
          <h1 className="text-xl md:text-2xl font-semibold text-gray-600">
            Your Cart is Empty 🛒
          </h1>
          <Link to={'/'} className="bg-green-400 px-4 py-2 rounded-4xl text-white">
              Back to shop
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;