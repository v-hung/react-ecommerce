import { NonIndexRouteObject, useNavigate } from "react-router-dom"
import Container from "../../components/Container"
import { FaChevronRight } from "react-icons/fa"
import { Button, Label, Radio, Select, TextInput, Textarea } from "flowbite-react"
import { useState } from "react"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return null
}

const Checkout = () => {
  const navigate = useNavigate()
  
  const [loadingOrder, setLoadingOrder] = useState(false)

  const order = async () => {
    setLoadingOrder(true)

    await new Promise(res => setTimeout(() => res(1), 500))

    setLoadingOrder(false)

    navigate("/order")
  }

  return (
    <>
      <section>
        <Container className="py-6 md:py-9">
          <div className="flex justify-center items-center space-x-4 font-bold md:text-xl text-gray-500">
            <span>Giỏ hàng</span>
            <FaChevronRight />
            <span className="text-primary-600">Thanh toán</span>
            <FaChevronRight />
            <span>Đặt hàng thành công</span>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full lg:w-3/5 px-3 mb-6">
              <p className="font-semibold md:text-xl mt-4">Chi tiết thanh toán</p>
              <div className="grid grid-cols-6 gap-4 mt-6">
                <div className="col-span-6">
                  <div className="mb-2 block">
                    <Label htmlFor="FullName" value="Tên đầy đủ" />
                    <span className="text-red-500 pl-2">*</span>
                  </div>
                  <TextInput id="FullName" name="FullName" required />
                </div>

                <div className="col-span-6 md:col-span-3">
                  <div className="mb-2 block">
                    <Label htmlFor="Email" value="Email" />
                    <span className="text-red-500 pl-2">*</span>
                  </div>
                  <TextInput id="Email" name="Email" required />
                </div>

                <div className="col-span-6 md:col-span-3">
                  <div className="mb-2 block">
                    <Label htmlFor="Phone" value="Số điện thoại" />
                    <span className="text-red-500 pl-2">*</span>
                  </div>
                  <TextInput id="Phone" name="Phone" required />
                </div>

                <div className="col-span-6 md:col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="Phone" value="Tỉnh / Thành phố " />
                    <span className="text-red-500 pl-2">*</span>
                  </div>
                  <Select id="countries" required>
                    <option disabled >Chọn tỉnh</option>
                  </Select>
                </div>

                <div className="col-span-6 md:col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="Phone" value="Quận / Huyện" />
                    <span className="text-red-500 pl-2">*</span>
                  </div>
                  <Select id="countries" required>
                    <option disabled >Chọn tỉnh</option>
                  </Select>
                </div>

                <div className="col-span-6 md:col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="Phone" value="Phường / Xã" />
                    <span className="text-red-500 pl-2">*</span>
                  </div>
                  <Select id="countries" required>
                    <option disabled >Chọn tỉnh</option>
                  </Select>
                </div>

                <div className="col-span-6">
                  <div className="mb-2 block">
                    <Label htmlFor="Phone" value="Địa chỉ chính xác" />
                    <span className="text-red-500 pl-2">*</span>
                  </div>
                  <Textarea />
                </div>

                <div className="col-span-6">
                  <div className="mb-2 block">
                    <Label htmlFor="Phone" value="Lời nhắn" />
                    <span className="text-red-500 pl-2">*</span>
                  </div>
                  <Textarea rows={4} placeholder="Ghi chú về đơn đặt hàng của bạn, ghi chú đặc biệt để giao hàng." />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/5 px-3 mb-6">
              <div className="border p-6">
                <h6 className="font-semibold">Đơn hàng của bạn</h6>

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

                  <div className="py-6">
                    <p className="font-semibold">Vận chuyển</p>
                    <div className="flex justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <Radio id="shipping" name="shipping" defaultChecked />
                        <Label htmlFor="shipping">Giao hàng tận nơi</Label>
                      </div>
                      <p>20,000 ₫</p>
                    </div>
                  </div>

                  <div className="flex justify-between py-6">
                    <p className="font-semibold">Tổng tiền</p>
                    <p className="text-lg font-semibold">103,000 ₫</p>
                  </div>

                  <div className="py-6">
                    <p className="font-semibold">Phương thức thanh toán</p>
                    <div className="flex flex-col space-y-2 mt-2">
                      <div className="flex items-center gap-2">
                        <Radio id="cash" name="status" value={"cash"} defaultChecked />
                        <Label htmlFor="cash">Tiền mặt</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="transfer" name="status" value={"transfer"} />
                        <Label htmlFor="transfer">Chuyển khoản</Label>
                      </div>
                    </div>
                  </div>

                  <Button className="rounded-none w-full" 
                    isProcessing={loadingOrder}
                    onClick={() => order()}
                  >Đặt hàng</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

Checkout.loader = loader

export default Checkout