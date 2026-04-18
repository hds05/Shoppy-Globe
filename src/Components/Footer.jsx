import React from 'react'
import { FaFacebook, FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

function Footer() {
    return (
        <footer className="bg-gray-300 text-black text-center px-6 py-10 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className='flex flex-col items-center'>
                    <a href="#">
                        <img src="/shoppyglobe.png" loading='lazy' width={'300px'} alt="" />
                    </a>
                    <p className="text-sm text-gray-900">
                        Your one-stop destination for all your shopping needs.
                        Fast delivery, best prices, and quality products.
                    </p>
                </div>
                <div>
                    <h2 className="font-semibold mb-3">Shop</h2>
                    <ul className="space-y-2 text-gray-900 text-sm">
                        <li>All Products</li>
                        <li>Categories</li>
                        <li>Deals</li>
                        <li>New Arrivals</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold mb-3">Support</h2>
                    <ul className="space-y-2 text-gray-900 text-sm">
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Shipping</a></li>
                        <li><a href="#">Returns</a></li>
                    </ul>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className="font-semibold mb-3">Follow Us</h2>
                    <div className="flex gap-4 text-xl">
                        <FaFacebook className="cursor-pointer hover:text-blue-500" />
                        <FaInstagram className="cursor-pointer hover:text-pink-500" />
                        <FaXTwitter className="cursor-pointer hover:text-black" />
                        <a href="https://github.com/hds05" target="_blank">
                            <FaGithub className="cursor-pointer hover:text-white" />
                        </a>
                        <AiOutlineYoutube className="cursor-pointer hover:text-red-500" />
                    </div>
                </div>

            </div>
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-900">
                © 2026 ShopyGlobe. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer;