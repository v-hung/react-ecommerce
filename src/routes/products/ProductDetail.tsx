import { Link, NonIndexRouteObject, useLoaderData } from "react-router-dom"
import Container from "../../components/Container"
import { Breadcrumb, Button, Tabs } from "flowbite-react"
import { HiClipboardList, HiHome, HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi"
import ImageZoom from "../../components/utils/ImageZoom"
import "./ProductDetail.css";
import SingleProduct, { RatingProduct } from "../../components/product/SingleProduct"
import TouchSpin from "../../components/form/TouchSpin"
import { useState } from "react"
import ShareSocialList from "../../components/utils/ShareSocialList"
import { BiCommentDetail } from "react-icons/bi"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  await new Promise(res => setTimeout(() => res(true), 1000))

  return {id: 1, name: 'afsdf', content: '<p>Bảng chọn size quần jean nam</p><p>🍓 Size 28 (Từ 43 - 48kg Cao Dưới 1m65) Vòng bụng 79cm</p><p>🍓 Size 29 (Từ 49 - 54kg Cao Dưới 1m65) Vòng bụng 80cm</p><p>🍓 Size 30 (Từ 55 - 59kg Cao Dưới 1m70) Vòng bụng 81cm</p><p>🍓 Size 31 ( Từ 60- 64kg Cao Dưới 1m75) Vòng bụng 83cm</p><p>🍓 Size 32 (Từ 65 - 69kg Cao Dưới 1m78) Vòng bụng 85cm</p><p>🍓 Size 34 (Từ 70 - 75KG cao Dướ 1m80) Vòng Bụng 87cm</p><p>LƯU Ý: những bạn có bụng nên lấy lớn hơn 1 size so với bảng trên ạ.</p><p>------------------------------------</p><p>👄 VỀ SẢN PHẨM:</p><p>✅ Sản phẩm được đặt may riêng theo mẫu thiết kế</p><p>✅ Quần jean nam với thiết kế mới thời trang hơn, mang lại sự tự tin tối đa cho người mặc trước những người xung quanh</p><p>✅ Quần may bằng vải denim nên rất mềm và thoải mái khi mặc, đảm bảo sẽ không hề cảm thấy gò bó ngay cả khi di chuyển nhiều.</p><p>✅ Dáng quần jean ống côn trẻ trung ôm body tạo nên form cực chuẩn cho người mặc túi quần lớn rất thuận tiện cho việc đựng smart phone hoặc ví cỡ bự.</p><p>✅ Màu sắc chuẩn được nhuộm kỹ đến hai lần giúp hạn chế tối đa việc phai màu khi sử dụng.</p><p>✅ Vài ảnh chụp cận cảnh để làm rõ thêm sự sắc nét của từng đường may, sớ vải.</p><p>✅ Size: 28 đến 34</p><p>✅ Xuất xứ: Chịu Trách Nhiệm Về Sản Phẩm KAYSTORE</p><p>HOÀNG DIỆU 2,LINH TRUNG,THỦ ĐỨC</p><p>------------------------------------</p><p>✔️ Loại : quần short nam, quần đùi nam,quần short jean nam</p><p>✔️ Thích hợp : quần short nam thích hợp cho Đi Chơi, Đời Thường,du lịch</p><p>✔️Chất liệu : quần short nam được làm từ chất jeans</p><p>✔️kiểu dáng: quần short nam, quần đùi nam</p><p>------------------------------------</p><p>:package: HƯỚNG DẪN BẢO QUẢN VÀ SỬ DỤNG.</p><p>☼ Lộn trái quần ra và sử dụng nước giặt giúp quần mau sạch và hạn chế phai màu.</p><p>☼ Để quần áo khô tự nhiên, phơi trong bóng râm thoáng mát.</p><p>☼ Không sử dụng hóa chất, thuốc tẩy trực tiếp lên sản phẩm, không ngâm quá lâu trong dung dịch tẩy.</p><p>☼ Là ủi ở nhiệt độ dưới 110 độ C.</p><p>cảm ơn bạn đã quan tâm đến sản phẩm: Quần short nam tenji sh099tj quần đùi nam xám trơn chất bò co dãn wash trẻ trung phong cách</p><p>------------------------------------</p><p>🥊🥊🥊 MUA NGAY 🥊🥊🥊</p>'}
  throw new Response("Not Found", { status: 404 })
}

const ProductDetail = () => {
  const data = useLoaderData() as any

  return (
    <>
      <section>
        <Container className='py-6'>
          <Breadcrumb>
            <Breadcrumb.Item icon={HiHome}>
              <Link to={"/"}>Trang chủ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to='/products'>Cửa hàng</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href='#'>{data.name}</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-2/5 px-4 mb-4">
              <swiper-container class="mt-2"
                navigation="true"
                thumbs-swiper=".product-thumbs"
              >
                {new Array(7).fill(0).map((v,i) =>
                  <swiper-slide key={i}>
                    <ImageZoom src="http://ecommerce123.somee.com/uploads/Product/vn-11134201-7r98o-ltynyt6z9m1754.jpg"
                      className="w-full aspect-square"
                    />
                  </swiper-slide>
                )}
              </swiper-container>
              
              <swiper-container class="mt-2 product-thumbs"
                slides-per-view={3}
                space-between={10}
                slide-to-clicked-slide={true}

                breakpoints={
                  JSON.stringify({
                    640:{
                      slidesPerView: 4,
                      spaceBetween: 16
                    },
                    768:{
                      slidesPerView: 3,
                      spaceBetween: 16
                    },
                    1024:{
                      slidesPerView: 4,
                      spaceBetween: 16
                    }
                  })
                }
              >
                {new Array(7).fill(0).map((v,i) =>
                  <swiper-slide key={i}>
                    <img src="http://ecommerce123.somee.com/uploads/Product/vn-11134201-7r98o-ltynyt6z9m1754.jpg"
                      className="w-full aspect-square object-cover" loading='lazy'
                    />
                  </swiper-slide>
                )}
              </swiper-container>
            </div>

            <div className="w-full md:w-1/2 lg:w-3/5 px-4 pt-2 flex flex-col space-y-4">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Áo Sơ Mi Thom Kẻ Sọc Xanh Xám Dài Tay Vải Cotton Lụa Cao Cấp Mẫu Hot dành cho các bạn năm 2024 Trend cực yêu 123</h1>
              <div className="flex space-x-2 items-center">
                <RatingProduct rating={4} />
                <span className="text-gray-500 text-sm">( 3 Đánh giá )</span>
              </div>
              
              <div className="border-b w-20"></div>

              <div className="flex space-x-3 items-center font-semibold text-lg md:text-xl">
                <span className="text-gray-500 line-through">206,000 ₫</span>
                <span className="text-2xl md:text-3xl">103,000 ₫</span>
              </div>

              <p className="text-sm  md:text-base text-gray-500 leading-7 tracking-wider">Áo Sơ Mi Thom Kẻ Sọc Xanh Xám Dài Tay Vải Cotton Lụa Cao Cấp Mẫu Hot dành cho các bạn năm 2023 Trend cực yêu CAM KẾT CỦA SHOP: ✔️ Với kinh nghiệm 10 năm kinh doanh online đi đầu ngành thời trang, shop cam kết phục vụ: - Sản phẩm chuẩn form mẫu - 100%</p>

              <p className="uppercase text-xs md:text-sm">
                <span className="text-gray-500">Danh mục : </span>
                <a href="#" className="link font-semibold">THỜI TRANG NAM</a>
              </p>

              <p className="uppercase text-xs md:text-sm">
                <span className="text-gray-500">Thẻ : </span>
                <a href="#" className="link font-semibold">áo</a>,&nbsp;
                <a href="#" className="link font-semibold">ÁO SƠ MI</a>
              </p>

              <div className="border-y pt-4 flex flex-wrap -mx-2 items-stretch">
                <div className="px-2 mb-4">
                  <TouchSpin defaultValue={1} parentClassName="h-full" />
                </div>
                <div className="px-2 mb-4">
                  <Button color="dark" size="lg" className="rounded-none">
                    <HiShoppingCart className="mr-2 h-5 w-5" />
                    Thêm vào giỏ hàng
                  </Button>
                </div>
                <div className="px-2 mb-4">
                  <Button color="gray" size="lg" className="rounded-none">
                    Xem giỏ hàng
                    <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <ShareSocialList />
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-6">
        <Container>
          <Tabs aria-label="Tabs with icons" style="underline">
            <Tabs.Item title="Mô tả" icon={HiClipboardList}>
              <div className="prose-sm md:prose-base" dangerouslySetInnerHTML={{ __html: data.content}}></div>
            </Tabs.Item>
            <Tabs.Item title="Bình luận" icon={BiCommentDetail}>
              Disabled content
            </Tabs.Item>
          </Tabs>
        </Container>
      </section>

      <section className="mt-6 mb-6">
        <Container>
          <h6 className="text-xl font-bold border-b pb-4">Sản phẩm liên quan</h6>
          <swiper-container class="mt-6 -mx-1.5 sm:-mx-2.5"
              slides-per-view={2}
              breakpoints={
                JSON.stringify({
                  640:{
                    slidesPerView: 2
                  },
                  768: {
                    slidesPerView: 3
                  },
                  1024: {
                    slidesPerView: 4
                  }
                })
              }
            >
              {new Array(7).fill(0).map((v,i) =>
                <swiper-slide key={i} class='px-1.5 sm:px-2.5 pb-2'>
                  <SingleProduct />
                </swiper-slide>
              )}
            </swiper-container>
        </Container>
      </section>
    </>
  )
}

ProductDetail.loader = loader

export default ProductDetail
