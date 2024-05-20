import { Outlet } from "react-router-dom"
import Header from "./partials/Header"
import Footer from "./partials/Footer"
import ScrollToTop from "../utils/ScrollToTop"
import ProgressIndicator from "../utils/ProgressIndicator"
import { Helmet } from "react-helmet"
import SnackBar from "../utils/SnackBar"
import { useEffect, useLayoutEffect, useState } from "react"
import { Fetch } from "../../lib/fetch"
import { ProductCategoryWidthProductCount } from "../../types/product"
import { Store } from "../../types/store"
import useWebStore from "../../stores/web"
import useProductStore from "../../stores/product"

const MainLayout = () => {
  useLayoutEffect(() => {
    const get = async () => {
      const [p, s] = await Promise.allSettled([
        Fetch<ProductCategoryWidthProductCount[]>("/api/productCategories"),
        Fetch<Store>("/api/store")
      ])

      if (p.status == "fulfilled") {
        useProductStore.setState({ productCategories: p.value[0] ?? [] })
      }

      if (s.status == "fulfilled") {
        useWebStore.setState({ store: s.value[0] })
      }
    }
    get()
  }, [])

  return (
    <>
      <Helmet>
        <title>Việt Hùng Store</title>
      </Helmet>
      <div className="flex flex-col min-h-[100vh]">
        <Header />
        <div className="flex-grow min-h-0">
          <Outlet />
        </div>
        <Footer />
      </div>
      <ScrollToTop />
      <ProgressIndicator/>
      <SnackBar />
    </>
  )
}

export default MainLayout