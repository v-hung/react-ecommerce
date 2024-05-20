import { FC, HTMLAttributes, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Container from '../Container'
import { ContentHeader } from '../../routes/Home'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import SingleProduct, { SingleProductShimmer } from '../product/SingleProduct'
import { ProductWidthReview } from '../../types/product'
import { Fetch } from '../../lib/fetch'

type State = HTMLAttributes<HTMLDivElement>

const HomeProductFeatured: FC<State> = (props) => {
  const { className, ...rest } = props

  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState<ProductWidthReview[]>([])

  useEffect(() => {
    const init = async () => {
      const [data] = await Fetch("/api/products/featured")

      setProduct(data ?? [])
      setLoading(false)
    }
    init()
  }, [])

  return (
    <section {...rest} className={twMerge('mb-6', className)}>
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
            { loading ? new Array(4).fill(0).map((v,i) =>
              <swiper-slide key={i + 'loading'} class='px-1.5 sm:px-2.5 pb-2'>
                <SingleProductShimmer />
              </swiper-slide>
            )
              : product.map(v => 
                <swiper-slide key={v.product.id} class='px-1.5 sm:px-2.5 pb-2'>
                  <SingleProduct product={v.product} />
                </swiper-slide>
              )
            }
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
  )
}

export default HomeProductFeatured