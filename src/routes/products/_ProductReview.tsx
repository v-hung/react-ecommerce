import { Button, Label, Rating, Spinner, TextInput, Textarea, theme } from 'flowbite-react'
import { FC, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { RatingProduct } from '../../components/product/SingleProduct'

type State = HTMLAttributes<HTMLDivElement>

const themeAdvanced = theme.ratingAdvanced
themeAdvanced.label = twMerge("flex-none",themeAdvanced.label)
themeAdvanced.progress.base = twMerge("flex-grow min-w-0",themeAdvanced.progress.base)

const ProductReview: FC<State> = (props) => {
  const { className, ...rest } = props
  return (
    <div {...rest} className={twMerge('relative', className)}>
      <div className='relative flex flex-wrap -mx-4 -mb-8'>
        <div className="w-full md:w-1/3 px-4 mb-8">
          <Rating className="mb-2">
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
          </Rating>
          <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
          <Rating.Advanced theme={themeAdvanced} percentFilled={70} className="mb-2">
            5 star
          </Rating.Advanced>
          <Rating.Advanced theme={themeAdvanced} percentFilled={17} className="mb-2">
            4 star
          </Rating.Advanced>
          <Rating.Advanced theme={themeAdvanced} percentFilled={8} className="mb-2">
            3 star
          </Rating.Advanced>
          <Rating.Advanced theme={themeAdvanced} percentFilled={4} className="mb-2">
            2 star
          </Rating.Advanced>
          <Rating.Advanced theme={themeAdvanced} percentFilled={1}>1 star</Rating.Advanced>
        </div>

        <div className="w-full md:w-2/3 px-4 mb-8">
          <p className="text-center">Không có bình luận nào</p>

          <div className="flex flex-col space-y-4">
            <div className="flex">
              <div className="flex-none w-16 h-16 bg-gray-100 mr-4"></div>
              <div className="w-0 h-0 my-auto border-[15px] border-l-0 border-y-transparent border-gray-100"></div>
              <div className="flex-grow bg-gray-100 px-4 py-1.5 flex flex-col justify-center">
                <p className="font-semibold text-sm">
                  Việt Hùng
                  <div className="float-right">
                    <RatingProduct starClassName='w-3 md:w-4' rating={4} />
                  </div>
                </p>
                <p className="text-gray-500 text-xs md:text-sm mt-1">Rất đẹp</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-none w-16 h-16 bg-gray-100 mr-4"></div>
              <div className="w-0 h-0 my-auto border-[15px] border-l-0 border-y-transparent border-gray-100"></div>
              <div className="flex-grow bg-gray-100 px-4 py-1.5 flex flex-col justify-center">
                <p className="font-semibold text-sm">
                  Việt Hùng
                  <div className="float-right">
                    <RatingProduct starClassName='w-3 md:w-4' rating={4} />
                  </div>
                </p>
                <p className="text-gray-500 text-xs md:text-sm mt-1">Rất đẹp</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full top-0 left-0 grid place-items-center bg-white/70">
          <Spinner />
        </div>
      </div>

      <div className="border-t mt-4 pt-4 md:mt-8 md:pt-6">
        <p className="font-semibold">Thêm một bài đánh giá</p>

        <form className="mt-4 border p-4 flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="FullName" value="Tên đầy dủ" />
              <span className="text-red-500 pl-2">*</span>
            </div>
            <Textarea rows={4} id="FullName" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="FullName" value="Tên đầy dủ" />
              <span className="text-red-500 pl-2">*</span>
            </div>
            <TextInput id="FullName" type="text" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="FullName" value="Tên đầy dủ" />
              <span className="text-red-500 pl-2">*</span>
            </div>
            <TextInput id="FullName" type="text" required />
          </div>
          <Button className='self-start'>Đánh giá</Button>
        </form>
      </div>
    </div>
  )
}

export default ProductReview