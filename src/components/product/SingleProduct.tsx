import { Button, Rating, RatingProps } from 'flowbite-react'
import { FC, HTMLAttributes, useState } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type State = HTMLAttributes<HTMLDivElement>

const SingleProduct: FC<State> = (props) => {
  const { className, ...rest } = props

  const [isHover, setIsHover] = useState(false)

  return (
    <div {...rest} className={twMerge('hover:shadow', className)} 
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link to='/products/tws-tai-nghe-chup-tai-bluetooth-52-am-thanh-hifi-kieu-dang-the-thao' className="block relative w-full aspect-square bg-gray-200">
        <div className="absolute top-2 left-2 flex flex-col space-y-2 text-white text-[10px] uppercase font-bold">
          <span className='bg-green-500 rounded-full px-2.5 py-1'>Hot</span>
          <span className='bg-red-500 rounded-full px-2.5 py-1'>-50%</span>
        </div>
      </Link>
      <div className="py-4 px-1 sm:px-4 text-center flex flex-col justify-center items-center space-y-1">
        <a className="link text-[10px] uppercase hover:text-primary-600">Thiết bị điện tử</a>
        <h6 className='w-full truncate font-semibold'>
          <Link to="/products/tws-tai-nghe-chup-tai-bluetooth-52-am-thanh-hifi-kieu-dang-the-thao" className='link'>Tws Tai Nghe Chụp Tai bluetooth 5.2 Âm Thanh hifi Kiểu Dáng Thể Thao</Link>
        </h6>
        <RatingProduct rating={4.4} />
        <p className='flex space-x-2 items-center font-semibold text-xs sm:text-sm'>
          <span className="line-through text-gray-500">206,000 ₫</span>
          <span className="text-sm sm:text-lg">103,000 ₫</span>
        </p>
        <div className='relative flex group/action'>
          <Button color={isHover ? "dark" : "gray"} size={"sm"} className='rounded-none relative z-10'>
            <span className='text-xs -mx-3 px-1 sm:text-sm sm:mx-0 sm:px-0'>Thêm vào giỏ hàng</span>
          </Button>
          <Button color={"gray"} size={"xs"} className='hidden lg:flex absolute right-0 h-full opacity-0 rounded-none group-hover/action:opacity-100 group-hover/action:translate-x-full transition-all'>
            <span className="icon">pageview</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct


type RatingProductState = RatingProps & {
  rating: number
}

export const RatingProduct: FC<RatingProductState> = (props) => {
  const { rating, ...rest } = props

  return (
    <Rating {...rest} title={`Đánh giá ${rating} sao`} >
      { new Array(5).fill(0).map((_,i) =>
        <Rating.Star key={i} filled={Math.round(rating) >= i + 1} />
      )}
    </Rating>
  )
}