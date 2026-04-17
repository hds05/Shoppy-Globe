import { useState } from "react";
import { Link } from "react-router-dom";


function Header() {
    const [cartData, setCartData] = useState(0)

    return (
        <>
            <header className="sticky top-0 bg-white">
                <div className="flex justify-between px-10 py-6 shadow-[1px_1px_2px_gray]">
                
                    <Link to={'/'}>
                        <img src="/shoppyglobe.png" width={'200px'} alt="" />
                    </Link>
                    <nav className="text-xl font-['Nunito'] flex gap-2">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/categories'}>Categories</Link>
                    </nav>
                    <div className="relative">
                        <img src="/shopping-cart.png" width={'40px'} alt="" />
                        <span className="absolute bottom-4 left-8 bg-white rounded-full shadow-[0px_1px_5px_gray] p-1 text-[10px]">{cartData}</span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;