import { Button, Rating, RatingProps } from 'flowbite-react'
import { FC, HTMLAttributes, ReactNode, useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Product } from '../../types/product'
import { getProductPercent } from '../../lib/product'
import { formatPrice, getImage } from '../../lib/helper'

type State = HTMLAttributes<HTMLDivElement> & {
  product: Product
}

const SingleProduct: FC<State> = (props) => {
  const { className, product, ...rest } = props

  const [isHover, setIsHover] = useState(false)

  return (
    <div {...rest} className={twMerge('hover:shadow', className)} 
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Link to={`/products/${product.slug}`} className="block relative w-full max-w-80 aspect-square bg-gray-200">
        <img src={getImage(product.image)} alt={product.name} className='w-full h-full object-cover' />
        <div className="absolute top-2 left-2 flex flex-col space-y-2 text-white text-[10px] uppercase font-bold">
          { product.isHot
            ? <span className='bg-green-500 rounded-full px-2.5 py-1'>Hot</span>
            : null
          }
          {
            product.compareAtPrice > 0
            ? <span className='bg-red-500 rounded-full px-2.5 py-1'>-{getProductPercent(product)}%</span>
            : null
          }
        </div>
      </Link>
      <div className="py-4 px-1 sm:px-4 text-center flex flex-col justify-center items-center space-y-1">
        <a className="link text-[10px] uppercase hover:text-primary-600">{product.categories[0].title}</a>
        <h6 className='w-full truncate font-semibold'>
          <Link to={`/products/${product.slug}`} className='link'>{product.name}</Link>
        </h6>
        <RatingProduct rating={4.4} />
        <p className='flex space-x-2 items-center font-semibold text-xs sm:text-sm'>
          { product.compareAtPrice > 0
            ? <span className="line-through text-gray-500">{formatPrice(product.compareAtPrice)}</span>
            : null
          }
          <span className="text-sm sm:text-lg">{formatPrice(product.price)}</span>
        </p>
        <div className='relative flex group/action'>
          <Button color={isHover ? "dark" : "gray"} size={"sm"} className='rounded-none relative z-10'>
            <span className='text-xs -mx-3 px-1 sm:text-sm sm:mx-0 sm:px-0'>Thêm vào giỏ hàng</span>
          </Button>
          <Button color={"gray"} size={"xs"} className='hidden lg:block absolute right-0 h-full opacity-0 rounded-none group-hover/action:opacity-100 group-hover/action:translate-x-full transition-all'>
            <FaExternalLinkAlt />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct

type RatingProductState = RatingProps & {
  rating: number,
  starClassName?: string
}

export const RatingProduct: FC<RatingProductState> = (props) => {
  const { rating, starClassName, ...rest } = props

  return (
    <Rating {...rest} title={`Đánh giá ${rating} sao`} >
      { new Array(5).fill(0).map((_,i) =>
        <Rating.Star className={starClassName} key={i} filled={Math.round(rating) >= i + 1} />
      )}
    </Rating>
  )
}

export const SingleProductShimmer = () => {
  return <div className='animate-pulse'>
    <div className="block relative w-full aspect-square bg-slate-200"></div>
    <div className="py-4 px-1 sm:px-4 text-center flex flex-col justify-center items-center space-y-2">
      <div className="w-20 h-3 bg-slate-200 rounded-full"></div>
      <div className="w-full h-5 bg-slate-200 rounded-full"></div>
      <RatingProduct rating={5} />
      <div className="flex space-x-2 items-center">
        <div className="w-16 h-5 bg-slate-200 rounded-full"></div>
        <div className="w-16 h-5 bg-slate-200 rounded-full"></div>
      </div>

      <div className="w-40 h-9 bg-slate-200"></div>
    </div>
  </div>
}