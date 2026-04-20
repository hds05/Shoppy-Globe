import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './utils/store.js'
import Loader from './Components/Loader.jsx'

// lazy loading components so they are loaded only when needed
const About = lazy(() => import('./Components/About.jsx'))
const Cart = lazy(() => import('./Components/Cart.jsx'))
const ProductDetail = lazy(() => import('./Components/ProductDetail.jsx'))
const ProductList = lazy(() => import('./Components/ProductList.jsx'))
const NotFoundPage = lazy(() => import('./Components/NotFoundPage.jsx'))

// all routes of the application
const appRouter = createBrowserRouter([
  {
    // Parent route
    path: '/',

    // main layout component
    element: <App />,

    // component shown if route does not exist
    errorElement:
      <Suspense fallback={<Loader />}>
        <NotFoundPage />
      </Suspense>,

    // child routes rendered inside Outlet of App component
    children: [

      // home page route
      {
        path: '/',
        element:
          <Suspense fallback={<Loader />}>
            <ProductList />
          </Suspense>,
      },

      // about page route
      {
        path: '/about',
        element:
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>,
        errorElement: <div className='h-screen flex justify-center items-center'>
          <div className='bg-white w-fit h-1/5 rounded-3xl p-4 m-2 flex justify-center items-center text-center'>
            <h1>There is no About Page...😬😬</h1>
          </div>
        </div>
      },

      // Product detail page route
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

      // Cart page route
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

    {/* Provider gives redux store access to whole app */}
    <Provider store={store}>

      {/* RouterProvider makes routing work in app */}
      <RouterProvider router={appRouter} />

    </Provider>

  </StrictMode>,
)
