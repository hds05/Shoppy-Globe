import { useSelector } from "react-redux";
import CartItem from "./CartItem";

function Cart() {
  const cart = useSelector((state) => state.cart.items)

  return (
    <>
      {cart.length ? (
        <div className="h-screen">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cart.map((e) => (
              <CartItem key={e.id} item={e} />
            )
            )}
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <h1>Your Cart is Empty.....</h1>
        </div>
      )
      }
    </>
  )
}

export default Cart;