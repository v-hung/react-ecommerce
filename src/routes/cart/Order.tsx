import { Link, NonIndexRouteObject } from "react-router-dom"
import Container from "../../components/Container"
import { FaChevronRight } from "react-icons/fa"
import { Button } from "flowbite-react"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return null
}

const Order = () => {
  return (
    <>
      <section>
        <Container className="py-6 md:py-9">
          <div className="flex justify-center items-center space-x-4 font-bold md:text-xl text-gray-500">
            <span>Giỏ hàng</span>
            <FaChevronRight />
            <span>Thanh toán</span>
            <FaChevronRight />
            <span className="text-primary-600">Đặt hàng thành công</span>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-6">
          <div className="flex flex-col space-y-4">
            <div className="font-bold text-center md:text-lg">Thành công</div>
            <p className="text-gray-500 text-center text-sm">
              Mã hóa đơn của bạn là : &nbsp;
              <span className="font-semibold">INVJETSFQ0Y5N-20240517</span>
            </p>
            <div className="flex space-x-4 justify-center">
              <Button as={Link} to={`/products`} className="rounded-none">Tiếp tục mua hàng</Button>
              <Button as={Link} to={`/orders/123456`} className="rounded-none" color="success" >Kiểm tra trạng thái đơn hàng</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

Order.loader = loader

export default Order