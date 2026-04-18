import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Header() {
    // const [cartData, setCartData] = useState(0)
    const TotalItems = useSelector((state) => (
        state.cart.items.reduce((acc, curr) => acc + curr.quantity, 0)
    ))

    return (
        <>
            <header className="sticky top-0 bg-white">
                <div className="flex justify-between px-10 py-6 shadow-[1px_1px_2px_gray]">
                    <Link to={'/'}>
                        <img src="/shoppyglobe.png" loading="lazy" width={'200px'} alt="logo" />
                    </Link>
                    <nav className="text-xl font-['Nunito'] flex gap-2">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/categories'}>Categories</Link>
                    </nav>
                    <Link to={'/cart'} className="relative">
                        <img src="/shopping-cart.png" loading="lazy" width={'40px'} alt="cart-icon" />
                        <span className="absolute bottom-4 left-8 bg-white rounded-full shadow-[0px_1px_5px_gray] p-1 text-[10px]">{TotalItems}</span>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header;