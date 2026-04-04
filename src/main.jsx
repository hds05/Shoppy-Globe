import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './Components/NotFoundPage.jsx'
import ProductList from './Components/ProductList.jsx'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path:'/productlist',
    element: <ProductList />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
