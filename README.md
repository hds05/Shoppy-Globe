# ShoppyGlobe

ShoppyGlobe is a modern e-commerce website built with React. In this project, users can explore products, search for items, filter them by category, view product details, Add products to their cart, Remove product from cart, make the cart empty and and on checkout can see the list of cart products with total price.

The goal of this project was to practice React, React Router, Redux Toolkit, lazy loading, and Tailwind CSS while building a complete shopping website.

In this project, users can:

* Browse products
* Search products
* Filter products by category
* View complete product details
* Add products to cart
* Increase or decrease quantity in cart
* Remove products from cart
* Place an order through checkout

---

# Built With

* React + Vite
* React Router DOM
* Redux Toolkit
* React Redux
* Tailwind CSS
* React Lazy
* Suspense

---

# Pages

## Home Page

Shows all available products with search and category filter.

## Product Detail Page

Shows complete information about a selected product including:

* Product images
* Price
* Rating
* Stock availability
* Brand
* Category
* Shipping and warranty information
* Customer reviews

## Cart Page

Shows all products added to the cart.

Users can:

* Increase quantity
* Decrease quantity
* Remove product
* Clear complete cart
* See total price
* Proceed to checkout

## Checkout Popup

A popup checkout form where the user enters:

* Name
* Phone Number
* Address

After placing the order, the cart is cleared and a success message is shown.

## About Page

Provides an introduction to ShoppyGlobe, including the purpose of the project, its story, and the technologies used to build it. It also highlights key features such as smart cart management, fast performance through lazy loading and code splitting, and a fully responsive design for all devices.

---

# Features

* Fetch products from API
* Search products using Redux state
* Filter products by category using Redux state
* Add products to cart using Redux
* Increase and decrease quantity in cart
* Prevent quantity from going below 1
* Remove products from cart
* Calculate total cart price
* Clear complete cart
* Responsive design for mobile, tablet, and desktop
* Lazy loading for routes and images
* Custom loading component
* Custom error handling for invalid product IDs and failed API requests

---

# Redux State Management

The project uses Redux Toolkit slices for:

* Cart state
* Search text state
* Selected category state

Reducers and selectors are created for:

* addToCart
* removeFromCart
* increaseQty
* decreaseQty
* emptyCart
* setSearchText
* setInputEmpty
* setCategory

---

# Performance Optimization

* Implemented code splitting using `React.lazy()`
* Used `Suspense` with fallback loaders
* Added lazy loading to product images using `loading="lazy"`

---

## 🛠️ Installation

```bash
git clone https://github.com/hds05/Shoppy-Globe.git
cd ShoppyGlobe
npm install
npm run dev
```

---

# API Used

```text
https://dummyjson.com/products
```

---

# Known Issues

* Cart data is stored only in Redux state. Because of this, the cart becomes empty after refreshing the page.
* In the future, this can be fixed using localStorage or a backend database.
* The checkout form currently does not save order details anywhere.
* Some product categories are shown dynamically from the API, so the category list depends on the fetched data.

---

# Future Improvements

* Save cart data in localStorage
* Add user authentication
* Add payment gateway integration
* Add wishlist feature
* Add sorting by price and rating
* Add dark mode

---

# Author

Made by Himanshu 😁
