import { FC, HTMLAttributes, MouseEvent, forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Collapse from '../Collapse'
import RangeSlide from '../form/RangeSlide'
import { formatPrice } from '../../lib/helper'
import { Button } from 'flowbite-react'
import { RatingProduct } from './SingleProduct'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useResizeDetector } from 'react-resize-detector'
import StickySidebar from 'sticky-sidebar'

export type ShopSideBarForWardRefState = {
  handelSetModelPopup: (open?: boolean) => void,
  updateSticky: () => void
}

type State = HTMLAttributes<HTMLDivElement> & {
  mainContent?: string
}

const ShopSideBar = forwardRef<ShopSideBarForWardRefState, State>((props, ref) => {
  const { className, mainContent = "main-content", ...rest } = props

  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebar = useRef<StickySidebar | null>(null)

  const onResize = useCallback(() => {
    if (window.matchMedia('(max-width: 1023px)').matches) {
      sidebar.current?.destroy();
      sidebar.current = null
    }
    else if (window.matchMedia('(min-width: 1024px)').matches && sidebar.current == null) {
      if (!sidebarRef.current) return

      sidebar.current = new StickySidebar(sidebarRef.current, {
        topSpacing: 83,
        bottomSpacing: 20,
        containerSelector: '#main-content',
        innerWrapperSelector: '.sidebar__inner'
      })
    }
    else {
      sidebar.current?.updateSticky();
    }
  }, []);

  const { ref: sidebarContentRef } = useResizeDetector({
    refreshMode: 'debounce',
    refreshRate: 100,
    onResize: onResize
  })

  useEffect(() => {
    return () => {
      sidebar.current?.destroy()
      sidebar.current = null
    }
  }, [])

  const [isMobilePopup, setIsMobilePopup] = useState(false)

  const handelSetModelPopup = (open?: boolean) => {
    if (setIsMobilePopup) {
      document.body.style.overflow = isMobilePopup ? null as any : 'hidden'
      setIsMobilePopup((state) => open ?? !state)
    }
  }

  useImperativeHandle(ref, () => ({
    handelSetModelPopup,
    updateSticky () {
      sidebar.current?.updateSticky()
    }
  }))

  const [rangeValue, setRangeValue] = useState<(string | number)[]>([0, 1000])

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-50 opacity-0 pointer-events-none lg:!opacity-0 lg:!pointer-events-none transition-opacity ${isMobilePopup ? '!opacity-100 !pointer-events-auto' : ''}`}
        onClick={() => handelSetModelPopup(false)}
      ></div>

      <div {...rest} ref={sidebarRef}
        className={twMerge(`
          fixed px-4 py-12 top-0 -left-72 bottom-0 z-50 w-72 overflow-y-auto transition-all bg-white ${isMobilePopup ? '!left-0' : ''}
          lg:static lg:w-72 lg:p-0 lg:z-auto lg:overflow-y-visible lg:left-0 lg:transition-none
        `, className)}
      >
        <div className="sidebar__inner">
          <div ref={sidebarContentRef} className="border">
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
        </div>
      </div>
    </>
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
          <span className="icon w-3 h-3">{isCollapsed ? <FaMinus /> : <FaPlus />}</span>
        </a>
      </div>

      <Collapse open={isCollapsed}>
        {children}
      </Collapse>
    </div>
  )
}