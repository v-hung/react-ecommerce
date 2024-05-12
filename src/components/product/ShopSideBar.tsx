import { FC, HTMLAttributes, MouseEvent, forwardRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Collapse from '../Collapse'
import RangeSlide from '../form/RangeSlide'
import { formatPrice } from '../../lib/helper'
import { Button } from 'flowbite-react'
import { RatingProduct } from './SingleProduct'

type State = HTMLAttributes<HTMLDivElement>

const ShopSideBar = forwardRef<HTMLDivElement, State>((props, ref) => {
  const { className, ...rest } = props

  const [rangeValue, setRangeValue] = useState<(string | number)[]>([0, 1000])

  return (
    <div {...rest} ref={ref} className={twMerge('border', className)}>
      <SidebarItem title='Danh mục sản phẩm' className='border-b'>
        <div className="flex flex-col space-y-1 text-gray-500 mt-2">
          <a href="#" className='link'>Thời trang nam (6)</a>
          <a href="#" className='link'>Nhà cửa và đời sống (4)</a>
          <a href="#" className='link'>Thiết bị điện tử (5)</a>
          <a href="#" className='link'>Mẹ và bé (0)</a>
          <a href="#" className='link'>Làm đẹp (0)</a>
        </div>
      </SidebarItem>

      <SidebarItem title='Giá' className='border-b'>
        <div className="mt-8 mb-2">
          <RangeSlide setValue={setRangeValue} />
          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
            <span>Giá: {formatPrice(+rangeValue[0])} - {formatPrice(+rangeValue[1])}</span>
            <Button size="sm" className='rounded-none'>Lọc</Button>
          </div>
        </div>
      </SidebarItem>

      <SidebarItem title='Sản phẩm nổi bật'>
        <div className="mt-4 flex flex-col space-y-3">
          {new Array(3).fill(0).map((v,i) =>
            <div className="flex items-center space-x-2" key={i}>
              <div className="flex-none w-20 h-20 bg-gray-200"></div>
              <div className='flex-grow min-w-0 flex flex-col space-y-1'>
                <h6 className="truncate">Áo Sơ Mi Thom Kẻ Sọc Xanh Xám Dài Tay Vải Cotton Lụa Cao Cấp Mẫu Hot dành cho các bạn năm 2024 Trend cực yêu</h6>
                <RatingProduct rating={4} />
                <p>{formatPrice(160000)}</p>
              </div>
            </div>
          )}
        </div>
      </SidebarItem>
    </div>
  )
})

export default ShopSideBar

const SidebarItem = (props: HTMLAttributes<HTMLDivElement> & {title?: string}) => {
  const { className, children, title, ...rest } = props

  const [isCollapsed, setIsCollapsed] = useState(true)

  const handelCollapse = (e: MouseEvent) => {
    e.preventDefault()
    setIsCollapsed(state => !state)
  }

  return (
    <div {...rest} className={twMerge("p-4", className)}>
      <div className="flex justify-between">
        <h6 className='font-semibold uppercase' >{title}</h6>
        <a href="#" className='link' onClick={handelCollapse}>
          <span className="icon">{!isCollapsed ? 'add' : 'remove'}</span>
        </a>
      </div>

      <Collapse open={isCollapsed}>
        {children}
      </Collapse>
    </div>
  )
}