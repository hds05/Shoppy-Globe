import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './utils/store.js'
import Loader from './Components/Loader.jsx'

const NotFoundPage = lazy(() => import('./Components/NotFoundPage.jsx'))
const Cart = lazy(() => import('./Components/Cart.jsx'))
const ProductDetail = lazy(() => import('./Components/ProductDetail.jsx'))
const ProductList = lazy(() => import('./Components/ProductList.jsx'))
const appRouter = createBrowserRouter([

  {
    // Home route
    path: '/',
    element:
      <App />,
    errorElement:
      <Suspense fallback={<Loader />}>
        <NotFoundPage />
      </Suspense>,
    children: [
      // Home route
      {
        path: '/',
        element:
          <Suspense fallback={<Loader />}>
            <ProductList />
          </Suspense>
      },

      // Product detail route
      {
        path: '/product/:id',
        element:
          <Suspense fallback={<Loader />}>
            <ProductDetail />
          </Suspense>
      },

      // Cart route
      {
        path: '/cart',
        element:
          <Suspense fallback={<h1>Wait... i am trying to get you cart.</h1>}>
            <Cart />
          </Suspense>
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
