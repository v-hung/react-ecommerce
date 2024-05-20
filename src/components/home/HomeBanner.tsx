import { FC, HTMLAttributes, useEffect, useRef, useState } from 'react'
import { SwiperContainer } from 'swiper/element'
import { twMerge } from 'tailwind-merge'
import Container from '../Container'
import { Button } from 'flowbite-react'
import { SwiperProps } from 'swiper/react'
import { Fetch } from '../../lib/fetch'
import { Banner } from '../../types/banner'
import { getImage } from '../../lib/helper'

type State = HTMLAttributes<HTMLDivElement>

const HomeBanner: FC<State> = (props) => {
  const { className, ...rest } = props

  const [loading, setLoading] = useState(true)
  const [banners, setBanners] = useState<Banner[]>([])

  useEffect(() => {
    const init = async () => {
      const [data] = await Fetch<Banner[]>("/api/banners?type=home")

      setBanners(data ?? [])
      setLoading(false)
    }

    init()
  }, [])

  return (
    <section {...rest} className={twMerge('home-slider', className)}>
      { loading
        ? <div className="w-full h-72 sm:h-96 md:h-[27rem] lg:h-[30rem] bg-slate-200 animate-pulse"></div>
        : <swiper-container
          pagination={true}
          navigation={true}
          loop={true}
          speed={2000}
          autoplay= {
            JSON.stringify({
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            })
          }
        >
          { banners.map((v,i) =>
            <swiper-slide key={v.id} class='bg-center' style={{backgroundImage: `url(${getImage(v.image)})`}}>
              <Container className={`h-full flex items-center px-10 sm:px-16 md:px-20 lg:px-28 ${i & 1 ? 'justify-end' : 'justify-start'}`}>
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
          )}
        </swiper-container>
      }
    </section>
  )
}

export default HomeBanner