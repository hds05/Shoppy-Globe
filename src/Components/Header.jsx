import { useState } from "react";


function Header() {
    const [cartData, setCartData] = useState(0)

    return (
        <>
            <header>
                <div className="flex justify-between px-10 py-6 shadow-[1px_1px_2px_gray]">

                    <div className="text-4xl ">ShoppyGlobe</div>
                    {/* <nav className="text-xl flex gap-2">
                    <a href="">About</a>
                    <a href="">Categories</a>
                    </nav> */}
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