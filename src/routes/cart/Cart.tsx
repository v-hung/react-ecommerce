import { NonIndexRouteObject, useNavigate } from "react-router-dom"
import Container from "../../components/Container"
import { FaChevronRight } from "react-icons/fa"
import { Button, Checkbox, Table } from "flowbite-react"
import TouchSpin from "../../components/form/TouchSpin"
import { useState } from "react"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return null
}

const Cart = () => {
  const navigate = useNavigate()

  const [loadingCheckout, setLoadingCheckout] = useState(false)
  const checkout = async () => {
    setLoadingCheckout(true)

    await new Promise(res => setTimeout(() => res(1), 500))

    setLoadingCheckout(false)

    navigate("/checkout")
  }

  return (
    <>
      <section>
        <Container className="py-6 md:py-9">
          <div className="flex justify-center items-center space-x-4 font-bold md:text-xl text-gray-500">
            <span className="text-primary-600">Giỏ hàng</span>
            <FaChevronRight />
            <span>Thanh toán</span>
            <FaChevronRight />
            <span>Đặt hàng thành công</span>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-2/3 px-3 mb-6">
            <div className="overflow-x-auto">
              <Table>
                <Table.Head>
                  <Table.HeadCell className="p-4">
                    <Checkbox />
                  </Table.HeadCell>
                  <Table.HeadCell>Sản phẩm</Table.HeadCell>
                  <Table.HeadCell>Giá</Table.HeadCell>
                  <Table.HeadCell>Số lượng</Table.HeadCell>
                  <Table.HeadCell>Tổng</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="p-4">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex space-x-2">
                        <div className="flex-none w-20 h-20 bg-gray-100"></div>
                        <h6 className="w-40 font-semibold line-clamp-4">Áo Sơ Mi Thom Kẻ Sọc Xanh Xám Dài Tay Vải Cotton Lụa Cao Cấp Mẫu Hot dành cho các bạn năm 2024 Trend cực yêu</h6>
                      </div>
                    </Table.Cell>
                    <Table.Cell>103,000 ₫</Table.Cell>
                    <Table.Cell>
                      <TouchSpin defaultValue={1} />
                    </Table.Cell>
                    <Table.Cell>103,000 ₫</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
            <Button color={"gray"} className="mt-4 rounded-none float-right">Cập nhập giỏ hàng</Button>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6">
              <div className="border p-6">
                <h6 className="font-semibold">Tổng giỏ hàng</h6>

                <div className="divide-y">
                  <div className="flex space-x-2 py-4">
                    <div className="flex-none w-16 h-16 bg-gray-100"></div>
                    <div>
                      <h3 className="font-semibold text-sm line-clamp-2">Áo Sơ Mi Thom Kẻ Sọc Xanh Xám Dài Tay Vải Cotton Lụa Cao Cấp Mẫu Hot dành cho các bạn năm 2024 Trend cực yêu</h3>
                      <p className="mt-2 text-sm flex">
                        <span>103,000 ₫ x 1</span>
                        <span className="ml-auto font-semibold">103,000 ₫</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2 py-4">
                    <div className="flex-none w-16 h-16 bg-gray-100"></div>
                    <div>
                      <h3 className="font-semibold text-sm line-clamp-2">Áo Sơ Mi Thom Kẻ Sọc Xanh Xám Dài Tay Vải Cotton Lụa Cao Cấp Mẫu Hot dành cho các bạn năm 2024 Trend cực yêu</h3>
                      <p className="mt-2 text-sm flex">
                        <span>103,000 ₫ x 1</span>
                        <span className="ml-auto font-semibold">103,000 ₫</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-t py-6">
                  <p className="font-semibold">Tổng tiền</p>
                  <p className="text-lg font-semibold">103,000 ₫</p>
                </div>

                <Button className="rounded-none w-full" 
                  isProcessing={loadingCheckout}
                  onClick={() => checkout()}
                >Thanh toán</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

Cart.loader = loader

export default Cart