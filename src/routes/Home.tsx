import Container from '../components/Container'
import "./Home.css";
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import HomeBanner from '../components/home/HomeBanner';
import useProductStore from '../stores/product';
import { getImage } from '../lib/helper';
import HomeProductFeatured from '../components/home/HomeProductFeatured';
import HomeProductNew from '../components/home/HomeProductNew';
import HomePost from '../components/home/HomePost';

export const Home = () => {
  const { productCategories } = useProductStore()

  return (
    <>
      <HomeBanner />

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
            {productCategories.map((v) =>
              <swiper-slide key={v.productCategory.id} class='px-1.5 sm:px-2.5 pb-2'>
                <div className="aspect-[3/2] max-w-80 bg-gray-300 rounded">
                  <img src={getImage(v.productCategory.image)} className='w-full h-full object-cover' />
                </div>
                <div className="pt-4 text-center">
                  <h6 className='uppercase font-bold text-sm'>{v.productCategory.title}</h6>
                  <p className="text-xs">{v.productCount} Sản phẩm</p>
                </div>
              </swiper-slide>
            )}
          </swiper-container>
        </Container>
      </section>

      <HomeProductFeatured />

      <HomeProductNew />

      <section>
          <img src="/imgs/banners/home-banner.jpg" alt="" className='w-full h-64 object-cover' loading='lazy' />
      </section>

      <HomePost/>
    </>
  )
}

export const ContentHeader = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props

  return (
    <div {...rest} className={twMerge("flex space-x-2 items-center py-6", className)}>
      <div className="flex-grow h-[1px] bg-gray-200"></div>
      <h3 className='uppercase text-lg font-bold'>{children}</h3>
      <div className="flex-grow h-[1px] bg-gray-200"></div>
    </div>
  )
}