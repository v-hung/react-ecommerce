import { Outlet } from "react-router-dom"
import Header from "./partials/Header"
import Footer from "./partials/Footer"
import ScrollToTop from "../utils/ScrollToTop"
import ProgressIndicator from "../utils/ProgressIndicator"

const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-[100vh]">
        <Header />
        <div className="flex-grow min-h-0">
          <Outlet />
        </div>
        <Footer />
      </div>
      <ScrollToTop />
      <ProgressIndicator/>
    </>
  )
}

export default MainLayout