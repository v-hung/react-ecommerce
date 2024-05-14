import { Outlet, createBrowserRouter, json } from "react-router-dom";
import { Home } from "./routes/Home";
import AuthProvider from "./components/auth/AuthProvider";
import ProgressIndicator from "./components/utils/ProgressIndicator";
import MainLayout from "./components/layouts/MainLayout";
import Login from "./routes/auth/Login";
import ProductShop from "./routes/products/ProductShop";
import ProductDetail from "./routes/products/ProductDetail";
import Error from "./routes/Error";
import Error404 from "./routes/Error404";
import PostList from "./routes/posts/PostList";
import PostDetail from "./routes/posts/PostDetail";
import Register from "./routes/auth/Register";
import About from "./routes/pages/About";
import Contact from "./routes/pages/Contact";
import PageDetail from "./routes/pages/PageDetail";
import Profile from "./routes/auth/Profile";
import Cart from "./routes/cart/Cart";
import Checkout from "./routes/cart/Checkout";
import Order from "./routes/cart/Order";
import OrderDetail from "./routes/cart/OrderDetail";

const router = createBrowserRouter([
  {
    loader: async () => {
      // load logged user
      return null
    },
    element: <MainLayout />,
    children: [
      {
        errorElement: <Error />,
        children: [
          {
            path: '/',
            element: <Home/>
          },
          {
            path: '/pages',
            children: [
              {
                path: 'about',
                loader: About.loader,
                element: <About/>  
              },
              {
                path: 'contact',
                loader: Contact.loader,
                element: <Contact/>  
              },
              {
                path: ':slug',
                loader: PageDetail.loader,
                element: <PageDetail/>  
              }
            ]
          },

          // products
          {
            path: '/products',
            element: <ProductShop />
          },
          {
            path: '/products/:slug',
            loader: ProductDetail.loader,
            element: <ProductDetail />
          },

          // posts
          {
            path: '/blogs/:slug',
            loader: PostList.loader,
            element: <PostList />,
          },
          {
            path: '/posts/:slug',
            loader: PostDetail.loader,
            element: <PostDetail />
          },

          // auth
          {
            path: '/account',
            element: <Outlet />,
            children: [
              {
                path:"login",
                element: <Login />
              },
              {
                path:"register",
                element: <Register />
              }
            ]
          },


          // is authentication
          {
            element: <AuthProvider/>,
            children: [
              {
                path: '/profile',
                loader: Profile.loader,
                element: <Profile />
              },
              {
                path: '/orders/:code',
                loader: OrderDetail.loader,
                element: <OrderDetail />
              },
              {
                path: '/cart',
                loader: Cart.loader,
                element: <Cart />
              },
              {
                path: '/checkout',
                loader: Checkout.loader,
                element: <Checkout />
              },
              {
                path: '/order',
                loader: Order.loader,
                element: <Order />
              }
            ]
          },

          // error 404
          {
            path: '/*',
            element: <Error404 />,
          }
        ]

      },
    ]
  },
])

export default router