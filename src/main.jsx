import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './Components/NotFoundPage.jsx'
import Cart from './Components/Cart.jsx'
import Search from './Components/Search.jsx'
import ProductDetail from './Components/ProductDetail.jsx'
import ProductList from './Components/ProductList.jsx'
import { Provider } from 'react-redux'
import { store } from './utils/store.js'

const appRouter = createBrowserRouter([
  {
    // Home route
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [

      // Home route
      {
        path: '/',
        element:
          <ProductList />
      },

      // Product detail route
      {
        path: '/product/:id',
        element: <ProductDetail />
      },

      // Cart route
      {
        path: '/cart',
        element: <Cart />
      },
      
      // checkout route
      {
        path: '/checkout'
      }
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
)
