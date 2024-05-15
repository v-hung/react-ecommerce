import { Link, NonIndexRouteObject } from "react-router-dom"
import Container from "../../components/Container"
import { HiHome } from "react-icons/hi"
import { Breadcrumb, Button, Label, TextInput, Textarea } from "flowbite-react"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return null
}

const Contact = () => {
  return (
    <>
      <section>
        <Container className='py-6'>
          <Breadcrumb>
            <Breadcrumb.Item icon={HiHome}>
              <Link to={"/"}>Trang chủ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Liên hệ</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </section>

      <section className="h-96 bg-gray-50">

      </section>

      <section className="py-12">
        <Container>
          <h6 className="text-lg md:text-2xl font-bold">Thông tin liên lạc</h6>
          <p className="text-gray-500 text-sm md:text-base mt-4">Chúng tôi luôn sẵn lòng lắng nghe và hỗ trợ bạn. Hãy liên hệ với chúng tôi bất cứ lúc nào bạn cần. Đội ngũ hỗ trợ của chúng tôi sẽ đảm bảo giải đáp mọi thắc mắc của bạn một cách nhanh chóng và chuyên nghiệp.</p>

          <div className="flex flex-wrap -mx-3 mt-10 text-center">
            <div className="w-full sm:w-1/3 px-3 mb-6">
              <span className="icon w-10 h-10 text-primary-500 mx-auto"><FaMapMarkerAlt /></span>
              <p className="text-lg md:text-xl font-bold mt-4 mb-2">Địa chỉ</p>
              <p className="text-gray-500 text-sm md:text-base">Huyện Sơn Động - Tp. Bắc Giang - Tỉnh Bắc Giang</p>
            </div>
            <div className="w-full sm:w-1/3 px-3 mb-6">
              <span className="icon w-10 h-10 text-primary-500 mx-auto"><FaPhoneAlt /></span>
              <p className="text-lg md:text-xl font-bold mt-4 mb-2">Số điện thoại</p>
              <p className="text-gray-500 text-sm md:text-base">+ 039 633 237</p>
            </div>
            <div className="w-full sm:w-1/3 px-3 mb-6">
              <span className="icon w-10 h-10 text-primary-500 mx-auto"><FaEnvelope /></span>
              <p className="text-lg md:text-xl font-bold mt-4 mb-2">Địa chỉ email</p>
              <p className="text-gray-500 text-sm md:text-base">viet.hung.2898@gmail.com</p>
            </div>
          </div>

          <div className="mt-12 border-t py-12">
            <form className="flex w-full max-w-md mx-auto flex-col gap-4" method='post'>
              <h6 className='font-bold text-xl'>Gửi tin nhắn cho chúng tôi</h6>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="fullName" value="Tên của bạn" /> 
                  <span className="text-red-500">*</span>
                </div>
                <TextInput id="fullName" name="fullName" type="text" required theme={{field: {input: {withAddon: {off: "rounded-none"}}}}} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Địa chỉ email" /> 
                  <span className="text-red-500">*</span>
                </div>
                <TextInput id="email" name="email" type="email" placeholder="name@flowbite.com" required theme={{field: {input: {withAddon: {off: "rounded-none"}}}}} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="message" value="Tin nhắn của bạn" />
                  <span className="text-red-500">*</span>
                </div>
                <Textarea id="message" name="message" rows={4} className="rounded-none"></Textarea>
              </div>
              <Button type="submit" className="rounded-none">Tiếp tục</Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  )
}

Contact.loader = loader

export default Contact