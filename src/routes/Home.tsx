import { Button } from 'flowbite-react'
import Container from '../components/Container'
import "./Home.css";
import { HTMLAttributes, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import SingleProduct from '../components/product/SingleProduct';
import PostSingle from '../components/post/PostSingle';
import { SwiperContainer } from 'swiper/element';
import { SwiperProps } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Home = () => {

  const homeSliderEl = useRef<SwiperContainer>(null)

  useEffect(() => {

    if (!homeSliderEl.current) return

    const params: SwiperProps = {
      pagination: true,
      navigation: true,
      loop: true,
      speed: 2000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }
    };

    if (homeSliderEl.current) {
      Object.assign(homeSliderEl.current, params);

      homeSliderEl.current.initialize();
    }
  }, [])

  return (
    <>
      <section className="home-slider">
        <swiper-container ref={homeSliderEl}
          init={false}
        >
          <swiper-slide class='bg-center' style={{backgroundImage: "url(/imgs/banners/slide-1.jpg)"}}>
            <Container className='h-full flex items-center px-10 sm:px-16 md:px-20 lg:px-28 justify-start'>
              <div className="slide-popup sm:min-w-96 max-w-screen-sm flex flex-col items-start space-y-2 sm:space-y-4">
                <h3 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium tracking-widest'>Giảm giá mùa hè
                </h3>
                <p className='text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold uppercase'>Đến 70%</p>
                <Button className='rounded-none uppercase py-1 sm:py-2' color="dark">
                  <span className="text-xs sm:text-sm">Mua sắm ngay</span>
                </Button>
              </div>
            </Container>
          </swiper-slide>
          <swiper-slide class='bg-center' style={{backgroundImage: "url(/imgs/banners/slide-2.jpg)"}}>
            <Container className='h-full flex items-center px-10 sm:px-16 md:px-20 lg:px-28 justify-end'>
              <div className="slide-popup sm:min-w-96 max-w-screen-sm flex flex-col items-start space-y-2 sm:space-y-4">
                <h3 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium tracking-widest'>Giảm giá mùa hè</h3>
                <p className='text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold uppercase'>Giảm 20%</p>
                <Button className='rounded-none uppercase py-1 sm:py-2' color="dark">
                  <span className="text-xs sm:text-sm">Mua sắm ngay</span>
                </Button>
              </div>
            </Container>
          </swiper-slide>
        </swiper-container>
      </section>

      <section className='py-6'>
        <Container>
          <ContentHeader>Danh mục sản phẩm</ContentHeader>
          <swiper-container class="mt-2 -mx-1.5 sm:-mx-2.5"
            slides-per-view={2}
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
              <swiper-slide key={i} class='px-1.5 sm:px-2.5 pb-2'>
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
          <div id='product-slide-feature' className="relative group pb-6">
            <swiper-container class="slider mt-2 -mx-1.5 sm:-mx-2.5"
              navigation={JSON.stringify({
                prevEl: "#product-slide-feature .swiper-button-prev",
                nextEl: "#product-slide-feature .swiper-button-next",
            
              })}
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
              {new Array(5).fill(0).map((v,i) =>
                <swiper-slide key={i} class='px-1.5 sm:px-2.5 pb-2'>
                  <SingleProduct />
                </swiper-slide>
              )}
            </swiper-container>
            <div className="absolute w-full h-full top-0 left-0 opacity-0 group-hover:opacity-100">
              <div className="swiper-button-prev absolute top-[30%] left-0 -translate-x-full p-2 select-none">
                <FaChevronLeft />  
              </div>
              <div className="swiper-button-next absolute top-[30%] right-0 translate-x-full p-2 select-none">
                <FaChevronRight />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className='pb-6 bg-gray-50'>
        <Container>
          <ContentHeader className='pt-12'>Sản phẩm mới</ContentHeader>
          <div id='product-slide-new' className="relative group pb-6">
            <swiper-container class="slider mt-2 -mx-1.5 sm:-mx-2.5"
              navigation={JSON.stringify({
                prevEl: "#product-slide-new .swiper-button-prev",
                nextEl: "#product-slide-new .swiper-button-next",
            
              })}
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
                    slidesPerView: 5
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
            <div className="absolute w-full h-full top-0 left-0 opacity-0 group-hover:opacity-100">
              <div className="swiper-button-prev absolute top-[30%] left-0 -translate-x-full p-2 select-none">
                <FaChevronLeft />  
              </div>
              <div className="swiper-button-next absolute top-[30%] right-0 translate-x-full p-2 select-none">
                <FaChevronRight />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
          <img src="/imgs/banners/home-banner.jpg" alt="" className='w-full h-64 object-cover' loading='lazy' />
      </section>

      <section className='mb-6'>
        <Container>
          <ContentHeader className='pt-12'>Tin tức</ContentHeader>
          <div id='blog-slider' className="relative group pb-6">
            <swiper-container class="slider mt-2"
              navigation={JSON.stringify({
                prevEl: "#blog-slider .swiper-button-prev",
                nextEl: "#blog-slider .swiper-button-next",
            
              })}
              slides-per-view={2}
              space-between={12}
              breakpoints={
                JSON.stringify({
                  640:{
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 20
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 20
                  }
                })
              }
            >
              {new Array(7).fill(0).map((v,i) =>
                <swiper-slide key={i}>
                  <PostSingle />
                </swiper-slide>
              )}
            </swiper-container>
            <div className="absolute w-full h-full top-0 left-0 opacity-0 group-hover:opacity-100">
              <div className="swiper-button-prev absolute top-[30%] left-0 -translate-x-full p-2 select-none">
                <FaChevronLeft />  
              </div>
              <div className="swiper-button-next absolute top-[30%] right-0 translate-x-full p-2 select-none">
                <FaChevronRight />
              </div>
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