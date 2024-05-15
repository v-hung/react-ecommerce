import { Link, NonIndexRouteObject, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import Container from "../../components/Container";
import { Breadcrumb, Button } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { BsTruck } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaQuoteLeft, FaUser } from "react-icons/fa";

const loader: NonIndexRouteObject["loader"] = async ({ params }) => {
  return {
    content: `
    <h4><strong style="background-color: rgb(255, 255, 255); color: var(--tw-prose-bold);">Giới thiệu về Việt Hùng Store</strong></h4><p><span style="background-color: rgb(255, 255, 255); color: rgb(13, 13, 13);">Việt Hùng Store là một trang thương mại điện tử phục vụ đa dạng nhu cầu mua sắm của khách hàng. Chúng tôi cam kết cung cấp các sản phẩm chất lượng từ các nhà sản xuất uy tín trong và ngoài nước, đồng thời mang đến trải nghiệm mua sắm trực tuyến thuận tiện và an toàn.</span></p><h4><strong style="background-color: rgb(255, 255, 255); color: var(--tw-prose-bold);">Sứ mệnh của chúng tôi</strong></h4><p><span style="background-color: rgb(255, 255, 255); color: rgb(13, 13, 13);">Sứ mệnh của Việt Hùng Store là tạo ra một nền tảng mua sắm trực tuyến đáng tin cậy, nơi mà khách hàng có thể tìm thấy những sản phẩm chất lượng, dịch vụ hoàn hảo và giá trị tốt nhất. Chúng tôi luôn lắng nghe và cải thiện để đáp ứng mọi nhu cầu của khách hàng.</span></p><h4><strong style="background-color: rgb(255, 255, 255); color: var(--tw-prose-bold);">Dịch vụ của chúng tôi</strong></h4><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><span style="background-color: rgb(255, 255, 255); color: rgb(13, 13, 13);">Đa dạng sản phẩm: Từ thời trang, điện tử đến đồ gia dụng và đồ chơi, chúng tôi cung cấp một loạt các sản phẩm phong phú và đa dạng.</span></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><span style="background-color: rgb(255, 255, 255); color: rgb(13, 13, 13);">Giao hàng nhanh chóng: Chúng tôi cam kết giao hàng nhanh chóng và an toàn đến tay khách hàng trong thời gian ngắn nhất có thể.</span></li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><span style="background-color: rgb(255, 255, 255); color: rgb(13, 13, 13);">Dịch vụ hỗ trợ khách hàng: Đội ngũ hỗ trợ khách hàng của chúng tôi luôn sẵn lòng hỗ trợ bạn trong quá trình mua sắm và sau khi mua hàng.</span></li></ol><p><span style="background-color: rgb(255, 255, 255); color: rgb(13, 13, 13);">Hãy đến với Việt Hùng Store và trải nghiệm sự tiện lợi và hài lòng khi mua sắm trực tuyến. Chúng tôi luôn sẵn lòng phục vụ và mang lại trải nghiệm tốt nhất cho bạn!</span></p>`
  };
};

const About = () => {

  const data = useLoaderData() as any

  return (
    <div>
      <Helmet>
        <title>Về chúng tôi</title>
      </Helmet>

      <section className="relative h-32 md:h-44 lg:h-60 bg-gray-500">
        <img
          src="/imgs/banners/page-header-bg.jpg"
          className="absolute w-full h-full top-0 left-0 object-cover"
          loading="lazy"
        />

        <Container className="relative h-full flex flex-col justify-center items-start">
          <h1 className="text-lg md:text-2xl lg:text-4xl font-bold">Về chúng tôi</h1>
          <Button color={"dark"} className="rounded-none mt-3 lg:mt-5">Liên hệ</Button>
        </Container>
      </section>

      <section>
        <Container className='py-6'>
          <Breadcrumb>
            <Breadcrumb.Item icon={HiHome}>
              <Link to={"/"}>Trang chủ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Về chúng tôi</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </section>

      <section>
        <Container className="prose-sm md:prose-base pb-6 md:pb-9 lg:pb-12" dangerouslySetInnerHTML={{ __html: data.content }}></Container>
      </section>

      <section className="bg-gray-50">
        <Container className="py-6 md:py-9 lg:py-12">
          <h6 className="font-bold text-lg md:text-xl">Tại sao chọn chúng tôi</h6>
          <div className="flex flex-wrap justify-center -mx-3 mt-6">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
              <div className="flex flex-col space-y-4 bg-white p-6">
                <span className="icon w-10 h-10 text-primary-500">
                  <BsTruck />
                </span>
                <p className="font-semibold">Miễn phí vận chuyển</p>
                <p className="text-gray-500 text-sm">Chúng tôi cung cấp dịch vụ vận chuyển miễn phí cho tất cả các đơn hàng.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
              <div className="flex flex-col space-y-4 bg-white p-6">
                <span className="icon w-10 h-10 text-primary-500">
                  <CiDollar />
                </span>
                <p className="font-semibold">ĐẢM BẢO HOÀN TIỀN 100%</p>
                <p className="text-gray-500 text-sm">Bạn sẽ nhận được hoàn lại 100% số tiền nếu không hài lòng với sản phẩm của chúng tôi.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6">
              <div className="flex flex-col space-y-4 bg-white p-6">
                <span className="icon w-10 h-10 text-primary-500">
                  <MdOutlineSupportAgent />
                </span>
                <p className="font-semibold">HỖ TRỢ TRỰC TUYẾN 24/7</p>
                <p className="text-gray-500 text-sm">Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng trực tuyến 24 giờ mỗi ngày để giúp đỡ bạn.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-6 md:py-9 lg:py-12">
          <h6 className="font-bold text-lg md:text-xl text-center">Khách hàng hài lòng</h6>
          <swiper-container class="mt-8"
            slides-per-view={1}
            space-between={24}
            breakpoints={
              JSON.stringify({
                768: {
                  slidesPerView: 2
                }
              })
            }
          >
            {new Array(7).fill(0).map((v,i) =>
              <swiper-slide key={i}>
                <div className="flex space-x-4">
                  <span className="icon w-10 h-10 rounded-full bg-gray-100 p-2">
                    <FaUser className="text-primary-500" />
                  </span>
                  <div className="uppercase">
                    <h6 className="font-semibold">Trần Thị Phương</h6>
                    <p className="text-gray-500 text-xs mt-1">Giáo viên</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm pl-14 pr-4 mt-4">
                  <FaQuoteLeft className="text-primary-500 -ml-6" />
                  Chúng tôi đã nhận được sản phẩm đúng hẹn và rất hài lòng với chất lượng của nó. Rất cảm ơn!
                </p>
              </swiper-slide>
            )}
          </swiper-container>
        </Container>
      </section>

      <section className="bg-gray-50">
        <Container className="py-6 md:py-9 lg:py-12">
          <div className="flex flex-wrap -mx-3 text-center">
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-3 mb-6">
              <h6 className="text-2xl md:text-3xl lg:text-4xl text-primary-500 font-bold">200+</h6>
              <p className="text-gray-500 font-semibold text-sm md:text-base mt-2">Triệu khách hàng</p>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-3 mb-6">
              <h6 className="text-2xl md:text-3xl lg:text-4xl text-primary-500 font-bold">1800+</h6>
              <p className="text-gray-500 font-semibold text-sm md:text-base mt-2">Triệu Sản phẩm</p>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-3 mb-6">
              <h6 className="text-2xl md:text-3xl lg:text-4xl text-primary-500 font-bold">10+</h6>
              <p className="text-gray-500 font-semibold text-sm md:text-base mt-2">Triệu Năm kinh nghiệm</p>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-3 mb-6">
              <h6 className="text-2xl md:text-3xl lg:text-4xl text-primary-500 font-bold">265+</h6>
              <p className="text-gray-500 font-semibold text-sm md:text-base mt-2">Triệu Nhân viên</p>
            </div>
            <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-3 mb-6">
              <h6 className="text-2xl md:text-3xl lg:text-4xl text-primary-500 font-bold">99%</h6>
              <p className="text-gray-500 font-semibold text-sm md:text-base mt-2">Triệu Khách hàng hài lòng</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

About.loader = loader;

export default About;
