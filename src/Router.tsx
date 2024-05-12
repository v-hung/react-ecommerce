import { Outlet, createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/Home";
// import AuthProvider from "./components/auth/AuthProvider";
import ProgressIndicator from "./components/utils/ProgressIndicator";
import About from "./routes/About";
import MainLayout from "./components/layouts/MainLayout";
import Login from "./routes/auth/Login";
import ProductShop from "./routes/product/ProductShop";
import ProductDetail from "./routes/product/ProductDetail";

const router = createBrowserRouter([
  {
    loader: async () => {
      // load logged user
      return null
    },
    element: <ProgressIndicator/>,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: '/',
            element: <Home/>  
          },
          {
            path: '/about',
            loader: async () => {
              await new Promise(res => setTimeout(() => res(true), 1000))
              return null
            },
            element: <About/>  
          },
          {
            path: '/products',
            element: <ProductShop />
          },
          {
            path: '/products/:slug',
            loader: ProductDetail.loader,
            element: <ProductDetail />
          },

          // auth
          {
            path: '/account',
            element: <Outlet />,
            children: [
              {
                path:"login",
                element: <Login />
              }
            ]
          }
        ]
      }

      // auth
      // {
      //   element: <AuthProvider/>,
      //   children: [
          
      //   ]
      // },
    ]
  },
])

export default router