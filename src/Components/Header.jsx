import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectedCategory, setCategory } from "../utils/categorySlice";
import { useCustomHook } from "../utils/useCustomHook";

function Header() {
    const [dropdown, setDropdown] = useState(false)
    const { data } = useCustomHook()

    const uniqueCategories = data
        ? [...new Set(data.map((item) => item.category))]
        : []

    const totalItems = useSelector((state) =>
        state.cart.items.reduce((acc, curr) => acc + curr.quantity, 0)
    )

    const category = useSelector(selectedCategory)
    const dispatch = useDispatch()

    function handleDropdown() {
        setDropdown(!dropdown)
    }

    const categoryLabel = {
        '': 'All',
        'beauty': 'Beauty',
        'fragrances': 'Fragrances',
        'furniture': 'Furniture',
        'groceries': 'Groceries'
    }

    return (
        <header className="sticky top-0 z-50 bg-white shadow-[1px_1px_2px_gray]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-4 md:px-10 md:py-6">

                <div className=" w-full md:w-fit flex justify-between">

                    {/* Logo */}
                    <Link to={'/'}>
                        <img
                            src="/shoppyglobe.png"
                            loading="lazy"
                            className="w-[150px] md:w-[200px]"
                            alt="logo"
                        />
                    </Link>
                    {/* Cart */}
                    <Link to={'/cart'} className="relative block md:hidden">
                        <img
                            src="/shopping-cart.png"
                            loading="lazy"
                            className="w-[35px] md:w-[40px]"
                            alt="cart-icon"
                        />

                        <span className="absolute -top-2 -right-2 min-w-[20px] h-[20px] flex items-center justify-center rounded-full bg-black text-white text-[10px] md:text-xs px-1">
                            {totalItems}
                        </span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-xl font-['Nunito']">
                    <Link to={'/'} onClick={()=> dispatch(setCategory(''))} className="hover:text-blue-500 hover:border-b transition">
                        Home
                    </Link>

                    <Link to={'/about'} className="hover:text-blue-500 hover:border-b transition">
                        About
                    </Link>

                    {/* Categories Dropdown */}
                    <div className="relative">
                        <button
                            onClick={handleDropdown}
                            className="hover:text-blue-500 hover:border-b transition cursor-pointer"
                        >
                            Categories
                        </button>

                        {dropdown && (
                            <div className="absolute left-1/2 top-8 -translate-x-1/2 md:left-0 md:translate-x-0 w-[180px] bg-white shadow-[0px_1px_5px_gray] rounded-xl p-2 z-50">
                                <ul className="flex flex-col gap-2">
                                    <li>
                                        <button onClick={() => {
                                            dispatch(setCategory(''))
                                            setDropdown(false)
                                        }}
                                            className={`w-full text-left px-2 py-1 rounded-lg hover:bg-gray-100 hover:text-blue-500 transition ${category === '' ? "text-blue-500 font-semibold" : ""
                                                }`}>
                                            All
                                        </button>
                                    </li>
                                    {uniqueCategories.map((e) => (
                                        <li key={e}>
                                            <button
                                                onClick={() => {
                                                    dispatch(setCategory(e))
                                                    setDropdown(false)
                                                }}
                                                className={`w-full text-left px-2 py-1 rounded-lg hover:bg-gray-100 hover:text-blue-500 transition ${category === e ? "text-blue-500 font-semibold" : ""
                                                    }`}
                                            >
                                                {categoryLabel[e]}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>

                {/* Cart */}
                <Link to={'/cart'} className="relative hidden md:block">
                    <img
                        src="/shopping-cart.png"
                        loading="lazy"
                        className="w-[35px] md:w-[40px]"
                        alt="cart-icon"
                    />

                    <span className="absolute -top-2 -right-2 min-w-[20px] h-[20px] flex items-center justify-center rounded-full bg-black text-white text-[10px] md:text-xs px-1">
                        {totalItems}
                    </span>
                </Link>
            </div>
        </header>
    )
}

export default Header