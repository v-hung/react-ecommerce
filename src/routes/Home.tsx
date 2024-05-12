import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import "./Home.css";
import { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import SingleProduct from '../components/product/SingleProduct';

export const Home = () => {

  return (
    <>
      <section className="home-slide">
        <swiper-container
          pagination={true} navigation={true}
          loop={true}
        >
          <swiper-slide class='bg-cover' style={{backgroundImage: "url(/imgs/banners/slide-1.jpg)"}}>
            <Container className='h-full flex items-center'>
              <div className="slide-popup min-w-96 max-w-screen-sm flex flex-col items-start space-y-4">
                <h3 className='text-3xl md:text-4xl lg:text-5xl font-medium tracking-widest'>Giảm giá mùa hè
                </h3>
                <p className='text-5xl md:text-6xl lg:text-7xl font-bold uppercase'>Đến 70%</p>
                <Button className='rounded-none uppercase py-2' color="dark">Mua sắm ngay</Button>
              </div>
            </Container>
          </swiper-slide>
          <swiper-slide class='bg-cover' style={{backgroundImage: "url(/imgs/banners/slide-2.jpg)"}}>
            <Container className='h-full flex items-center justify-end'>
              <div className="slide-popup min-w-96 max-w-screen-sm flex flex-col items-start space-y-4">
                <h3 className='text-3xl md:text-4xl lg:text-5xl font-medium tracking-widest'>Giảm giá mùa hè</h3>
                <p className='text-5xl md:text-6xl lg:text-7xl font-bold uppercase'>Giảm 20%</p>
                <Button className='rounded-none uppercase py-2' color="dark">Mua sắm ngay</Button>
              </div>
            </Container>
          </swiper-slide>
        </swiper-container>
      </section>

      <section className='py-6'>
        <Container>
          <ContentHeader>Danh mục sản phẩm</ContentHeader>
          <swiper-container class="mt-2 product-slide"
            slides-per-view={1.3}
            breakpoints={
              JSON.stringify({
                640:{
                  slidesPerView: 2
                },
                768: {
                  slidesPerView: 4
                },
                1024: {
                  slidesPerView: 5
                }
              })
            }
          >
            {new Array(8).fill(0).map((v,i) =>
              <swiper-slide key={i} class='px-4 pb-2'>
                <div className="aspect-[3/2] bg-gray-300 rounded"></div>
                <div className="pt-4 text-center">
                  <h6 className='uppercase font-bold text-sm'>Thời trang nam</h6>
                  <p className="text-xs">6 Sản phẩm</p>
                </div>
              </swiper-slide>
            )}
          </swiper-container>
        </Container>
      </section>

      <section className='mb-6'>
        <Container>
          <ContentHeader className='pt-12'>Sản phẩm nổi bật</ContentHeader>
          <div className="relative group pb-6">
            <swiper-container class="mt-2 product-slide"
              navigation={JSON.stringify({
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
            
              })}
              slides-per-view={1.3}
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
              {new Array(5).fill(0).map((v,i) =>
                <swiper-slide key={i} class='px-4 pb-2'>
                  <SingleProduct />
                </swiper-slide>
              )}
            </swiper-container>
            <div className="opacity-0 group-hover:opacity-100">
              <div className="swiper-button-prev absolute top-[30%] -left-6 p-2 select-none"><span className="icon text-3xl">chevron_left</span></div>
              <div className="swiper-button-next absolute top-[30%] -right-6 p-2 select-none"><span className="icon text-3xl">chevron_right</span></div>
            </div>
          </div>
        </Container>
      </section>

      <section className='pb-6 bg-gray-50'>
        <Container>
          <ContentHeader className='pt-12'>Sản phẩm mới</ContentHeader>
          <div className="relative group pb-6">
            <swiper-container class="mt-2 product-slide"
              navigation={JSON.stringify({
                prevEl: ".swiper-button-prev2",
                nextEl: ".swiper-button-next2",
            
              })}
              slides-per-view={1.3}
              breakpoints={
                JSON.stringify({
                  640:{
                    slidesPerView: 2
                  },
                  768: {
                    slidesPerView: 3
                  },
                  1024: {
                    slidesPerView: 5
                  }
                })
              }
            >
              {new Array(7).fill(0).map((v,i) =>
                <swiper-slide key={i} class='px-2 pb-2'>
                  <SingleProduct />
                </swiper-slide>
              )}
            </swiper-container>
            <div className="opacity-0 group-hover:opacity-100">
              <div className="swiper-button-prev2 absolute top-1/4 -left-8 p-2 select-none"><span className="icon text-3xl">chevron_left</span></div>
              <div className="swiper-button-next2 absolute top-1/4 -right-8 p-2 select-none"><span className="icon text-3xl">chevron_right</span></div>
            </div>
          </div>
        </Container>
      </section>

      <section>
          <img src="/imgs/banners/home-banner.jpg" alt="" className='w-full h-64 object-cover' />
      </section>

      <section className='mb-6'>
        <Container>
          <ContentHeader className='pt-12'>Tin tức</ContentHeader>
          <div className="relative group pb-6">
            <swiper-container class="mt-2 product-slide"
              navigation={JSON.stringify({
                prevEl: ".swiper-button-prev2",
                nextEl: ".swiper-button-next2",
            
              })}
              slides-per-view={1.3}
              space-between={16}
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
                <swiper-slide key={i}>
                  <div>
                    <a href='#' className="block relative w-full aspect-square bg-gray-200">
                      <div className="absolute top-2 left-2 flex flex-col text-white text-center uppercase font-bold bg-gray-500 px-2.5 py-1">
                        <span className=''>05</span>
                        <span className='text-xs'>Thg 2</span>
                      </div>
                    </a>
                    <div className="py-4 flex flex-col space-y-2">
                      <h6>
                        <a href="#" className='line-clamp-2 font-semibold text-lg'>Tiết lộ lý do những bộ sưu tập thời trang gần đây trở nên đắt đỏ</a>
                      </h6>
                      <p className='line-clamp-3 text-gray-500 text-sm'>Thời trang chưa bao giờ là một địa hạt “khiêm tốn”. Không chỉ bởi vẻ đẹp tinh tế và sang trọng, các thiết kế cao cấp trở thành “giấc mơ” của các tín đồ thời trang thế giới nhờ sự tinh tế, tỉ mỉ trong từng chi tiết cũng như quá trình chế tác đầy kỳ cô</p>
                      <p className="text-xs text-gray-500">3 lượt xem</p>
                    </div>
                  </div>
                </swiper-slide>
              )}
            </swiper-container>
            <div className="opacity-0 group-hover:opacity-100">
              <div className="swiper-button-prev2 absolute top-1/4 -left-8 p-2 select-none"><span className="icon text-3xl">chevron_left</span></div>
              <div className="swiper-button-next2 absolute top-1/4 -right-8 p-2 select-none"><span className="icon text-3xl">chevron_right</span></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

const ContentHeader = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props

  return (
    <div {...rest} className={twMerge("flex space-x-2 items-center py-6", className)}>
      <div className="flex-grow h-[1px] bg-gray-200"></div>
      <h3 className='uppercase text-lg font-bold'>{children}</h3>
      <div className="flex-grow h-[1px] bg-gray-200"></div>
    </div>
  )
}