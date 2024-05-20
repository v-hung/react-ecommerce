import { FC, HTMLAttributes, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Container from '../Container'
import { ContentHeader } from '../../routes/Home'
import PostSingle, { PostSingleShimmer } from '../post/PostSingle'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Post, PostCategory } from '../../types/post'
import { Fetch } from '../../lib/fetch'

type State = HTMLAttributes<HTMLDivElement>

const HomePost: FC<State> = (props) => {
  const { className, ...rest } = props

  const [loading, setLoading] = useState(true)
  const [post, setPost] = useState<Post[]>([])

  useEffect(() => {
    const init = async () => {
      const [data] = await Fetch<{
        posts: Post[]
        postCount: number
        postCategory: PostCategory
      }>("/api/posts?Category=tin-moi")

      setPost(data?.posts ?? [])
      setLoading(false)
    }
    init()
  }, [])

  return (
    <section {...rest} className={twMerge('mb-6', className)}>
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
            { loading ? new Array(4).fill(0).map((v,i) =>
              <swiper-slide key={i + 'loading'} class='px-1.5 sm:px-2.5 pb-2'>
                <PostSingleShimmer />
              </swiper-slide>
            )
              : post.map(v => 
                <swiper-slide key={v.id}>
                  <PostSingle post={v} />
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

export default HomePost