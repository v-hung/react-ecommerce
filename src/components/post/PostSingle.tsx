import { FC, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type State = HTMLAttributes<HTMLDivElement>

const PostSingle: FC<State> = (props) => {
  const { className, ...rest } = props

  return (
    <div {...rest} className={twMerge('', className)}>
      <Link to={`/posts/4-mau-vay-du-va-nong-buc-khong-nen-mac-i-du-lich`} className="block relative w-full aspect-square bg-gray-200">
        <div className="absolute top-2 left-2 flex flex-col text-white text-center uppercase font-bold bg-gray-500 px-2.5 py-1">
          <span className=''>05</span>
          <span className='text-xs'>Thg 2</span>
        </div>
      </Link>
      <div className="py-4 flex flex-col space-y-2">
        <h6>
          <Link to={`/posts/4-mau-vay-du-va-nong-buc-khong-nen-mac-i-du-lich`} className='line-clamp-2 font-semibold text-lg'>Tiết lộ lý do những bộ sưu tập thời trang gần đây trở nên đắt đỏ</Link>
        </h6>
        <p className='line-clamp-3 text-gray-500 text-sm'>Thời trang chưa bao giờ là một địa hạt “khiêm tốn”. Không chỉ bởi vẻ đẹp tinh tế và sang trọng, các thiết kế cao cấp trở thành “giấc mơ” của các tín đồ thời trang thế giới nhờ sự tinh tế, tỉ mỉ trong từng chi tiết cũng như quá trình chế tác đầy kỳ cô</p>
        <p className="text-xs text-gray-500">3 lượt xem</p>
      </div>
    </div>
  )
}

export default PostSingle