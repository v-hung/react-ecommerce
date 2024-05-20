import { NonIndexRouteObject } from "react-router-dom"
import PageHeader from "../../components/layouts/partials/PageHeader"
import Container from "../../components/Container"
import { FaSignOutAlt, FaUser } from "react-icons/fa"
import { MouseEvent, useState } from "react"
import ProfileInfo from "./_ProfileInfo"
import ProfileOrders from "./_ProfileOrders"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return null
}

const Profile = () => {

  const [tab, setTab] = useState<"info" | "orders">("info")

  const changeTab = (e: MouseEvent, value: "info" | "orders") => {
    e.preventDefault()

    setTab(value)
  }

  return (
    <>
      <PageHeader title='Tài khoản của tôi' breadcrumbs={[{ title: "Tài khoản"}]} className="bg-gray-50" />

      <section className="mt-6 mb-16">
        <Container>
          <div className="flex flex-wrap -mx-3 -mb-6">
            <div className="w-full lg:w-1/4 px-3 pr-10 mb-6">
              <div className="flex flex-col font-semibold text-sm md:text-base">
                <a 
                  href="#info" className={`py-2.5 border-b ${tab != "info" ? 'text-gray-500' : ''}`}
                  onClick={(e) => changeTab(e, "info")}
                >Thông tin cá nhân</a>
                <a 
                  href="#orders" className={`py-2.5 border-b ${tab != "orders" ? 'text-gray-500' : ''}`}
                  onClick={(e) => changeTab(e, "orders")}
                >Hóa đơn</a>
                <a href="#" className="flex items-center space-x-2 py-2.5 text-red-600">
                  <FaSignOutAlt /> <span>Đăng xuất</span>
                </a>
              </div>
            </div>

            <div className="w-full lg:w-3/4 px-3 mb-6">
              { tab == "info"
                ? <ProfileInfo />
                : <ProfileOrders />
              }
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

Profile.loader = loader

export default Profile