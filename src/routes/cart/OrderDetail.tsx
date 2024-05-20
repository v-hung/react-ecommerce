import { NonIndexRouteObject } from "react-router-dom"
import Container from "../../components/Container"
import dayjs from "dayjs"
import { FaMapMarkerAlt, FaShippingFast, FaUser } from "react-icons/fa"
import { Badge, Table, Textarea } from "flowbite-react"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return null
}

const OrderDetail = () => {
  return (
    <>
      <section>
        <Container className="text-center py-6 md:py-9">
          <p className="text-primary-600 font-semibold md:text-xl">Thông tin hóa đơn</p>
        </Container>
      </section>

      <section className="mb-10">
        <Container>
          <div className="border">
            <div className="px-4 py-3 border-b bg-gray-50 flex flex-wrap justify-between gap-3 items-center">
              <div className="">
                <p className="font-semibold first-letter:uppercase text-sm md:text-base">{dayjs().format('dddd, [ngày] D [tháng] M [năm] YYYY')}</p>
                <p className="text-xs md:text-sm mt-2">
                  Mã hóa đơn: <span className="font-semibold">INVJETSFQ0Y5N-20240517</span>
                  </p>
              </div>
              <div className="md:text-lg font-semibold">Chờ xử lý</div>
            </div>

            <div className="flex flex-wrap -mx-3 -mb-6 p-4">
              <div className="w-full md:w-1/3 px-3 mb-6">
                <div className="flex space-x-2">
                  <span className="icon w-10 h-10 p-2.5 rounded-full bg-green-400 text-white">
                    <FaUser />
                  </span>
                  <div className="text-sm md:text-base">
                    <p className="font-semibold">Thông tin</p>
                    <p className="mt-2">Nguyễn Việt Hùng</p>
                    <p>viet.hung.2898@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6">
                <div className="flex space-x-2">
                  <span className="icon w-10 h-10 p-2.5 rounded-full bg-green-400 text-white">
                    <FaShippingFast />
                  </span>
                  <div className="text-sm md:text-base">
                    <p className="font-semibold">Thông tin đặt hàng</p>
                    <p className="mt-2">Giao hàng miễn phí</p>
                    <p>Thanh toán bằng tiền mặt</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6">
                <div className="flex space-x-2">
                  <span className="icon w-10 h-10 p-2.5 rounded-full bg-green-400 text-white">
                    <FaMapMarkerAlt />
                  </span>
                  <div className="text-sm md:text-base">
                    <p className="font-semibold">Giao hàng đến</p>
                    <p className="mt-2">200 Trần Điền - Định Công - Phường Phúc Xá - Quận Ba Đình - Thành phố Hà Nội</p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3 px-3 mb-6">
                <div className="overflow-x-auto">
                  <Table>
                    <Table.Head>
                      <Table.HeadCell>Sản phẩm</Table.HeadCell>
                      <Table.HeadCell>Giá</Table.HeadCell>
                      <Table.HeadCell>Số lượng</Table.HeadCell>
                      <Table.HeadCell>Tổng Tiền</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell>
                          <div className="flex space-x-3">
                            <div className="w-16 h-16 bg-gray-100"></div>
                            <div className="w-40 line-clamp-3">
                              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quos ipsam molestias assumenda nemo iure illo totam provident ea nihil commodi ducimus, sunt ab cum eaque repudiandae aut dignissimos recusandae.
                            </div>
                          </div>
                        </Table.Cell>
                        <Table.Cell>10000</Table.Cell>
                        <Table.Cell>1</Table.Cell>
                        <Table.Cell>$2999</Table.Cell>
                      </Table.Row>
                      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell colSpan={4}>
                          <div className="flex space-x-12 justify-end">
                            <div className="flex flex-col space-y-1">
                              <p>Tổng tiền:</p>
                              <p>Phí vận chuyện</p>
                              <p>Tổng thành toán:</p>
                              <p>Trạng thái</p>
                            </div>
                            <div className="text-right flex flex-col space-y-1">
                              <p>103,000 ₫</p>
                              <p>0</p>
                              <b>103,000 ₫</b>
                              <Badge color="success">Success</Badge>
                            </div>
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6">
                <p className="font-semibold mb-4">Ghi chú</p>
                <Textarea disabled rows={4} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

OrderDetail.loader = loader

export default OrderDetail