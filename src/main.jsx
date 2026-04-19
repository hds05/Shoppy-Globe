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
          </Suspense>,
      },

      // Product detail route
      {
        path: '/product/:id',
        element:
          <Suspense fallback={<Loader />}>
            <ProductDetail />
          </Suspense>,
        errorElement: <div className='h-screen flex justify-center items-center'>
          <div className='bg-white w-fit h-1/5 rounded-3xl p-4 m-2 flex justify-center items-center text-center'>
            <h1>There is no element with this ID...😬😬</h1>
          </div>
        </div>
      },

      // Cart route
      {
        path: '/cart',
        element:
          <Suspense fallback={<h1>Wait... i am trying to get you cart.</h1>}>
            <Cart />
          </Suspense>,
        errorElement:
          <div className='h-screen flex justify-center items-center'>
            <div className='bg-white w-fit h-1/5 rounded-3xl p-4 m-2 flex justify-center items-center text-center'>
              <h1>There is some issue with cart...😬😬</h1>
            </div>
          </div>
      },
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
