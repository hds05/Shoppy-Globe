import React from 'react'

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10 md:px-10 lg:px-20">
            <div className="mx-auto max-w-6xl">
                <div className="rounded-3xl bg-blue-400/40 p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.08)] md:p-12">
                    <h1 className="text-center text-4xl font-bold text-gray-800 md:text-5xl">
                        About <span className='text-blue-700'>Shoppy</span><span className='text-orange-600'>Globe</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-8 text-gray-600 md:text-lg">
                        Welcome to <span className="font-semibold text-black">ShoppyGlobe</span> — your one-stop place to discover products across multiple categories like beauty, groceries, furniture, fragrances, and more.
                        We built this platform to make shopping simple, fast, and fun.
                    </p>
                </div>

                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                    <div className="rounded-3xl bg-white p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
                        <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
                            Our Story </h2>
                        <p className="mb-4 leading-7 text-gray-600">
                            ShoppyGlobe started with a simple idea: shopping websites should feel easy, clean, and quick instead of confusing and cluttered.
                        </p>
                        <p className="leading-7 text-gray-600">
                            This project was created using React, Redux, and modern web development practices such as lazy loading, state management, and responsive design to provide a smooth user experience on every device.
                        </p>
                    </div>

                    <div className="rounded-3xl bg-white p-8 shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
                        <h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">
                            What Makes Us Different?
                        </h2>
                        <div className="space-y-4 text-gray-600">
                            <div className="flex items-start gap-3 rounded-2xl bg-gray-200 p-4">
                                <span className="text-2xl">🛒</span>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Smart Cart Management</h3>
                                    <p>Easily add, remove, and manage product quantities with Redux-powered cart functionality.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 rounded-2xl bg-gray-200 p-4">
                                <span className="text-2xl">⚡</span>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Fast Performance</h3>
                                    <p>We use lazy loading and code splitting so pages load faster and feel smoother.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 rounded-2xl bg-gray-200 p-4">
                                <span className="text-2xl">📱</span>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Responsive Design</h3>
                                    <p>Whether you open the site on mobile, tablet, or desktop, it adapts beautifully.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl bg-white p-6 text-center shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
                        <h2 className="text-3xl font-bold text-black">100+</h2>
                        <p className="mt-2 text-gray-600">Products Available</p>
                    </div>

                    <div className="rounded-3xl bg-white p-6 text-center shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
                        <h2 className="text-3xl font-bold text-black">10+</h2>
                        <p className="mt-2 text-gray-600">Categories</p>
                    </div>

                    <div className="rounded-3xl bg-white p-6 text-center shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
                        <h2 className="text-3xl font-bold text-black">24/7</h2>
                        <p className="mt-2 text-gray-600">Shopping Access</p>
                    </div>

                    <div className="rounded-3xl bg-white p-6 text-center shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
                        <h2 className="text-3xl font-bold text-black">∞</h2>
                        <p className="mt-2 text-gray-600">Possibilities</p>
                    </div>
                </div>
                <div className="mt-10 rounded-3xl bg-black px-6 py-10 text-center text-white shadow-[0px_4px_20px_rgba(0,0,0,0.2)] md:px-12">
                    <h2 className="text-3xl font-bold">Thanks for Visiting ShoppyGlobe!</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-300 leading-7">
                        We hope you enjoy exploring products and building your perfect cart. Honestly, half the fun of online shopping is adding things to the cart and pretending we are definitely going to buy them.
                    </p>
                </div>
            </div>
        </div>
    )
}
