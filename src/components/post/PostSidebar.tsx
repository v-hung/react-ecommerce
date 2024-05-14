import { FC, HTMLAttributes, useCallback, useEffect, useRef, useState } from 'react'
import { FaSlidersH } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useResizeDetector } from 'react-resize-detector'
import StickySidebar from 'sticky-sidebar'
import { twMerge } from 'tailwind-merge'

type State = HTMLAttributes<HTMLDivElement> & {
  mainContent?: string
}

const PostSidebar: FC<State> = (props) => {
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
    document.body.style.overflow = isMobilePopup ? null as any : 'hidden'
    setIsMobilePopup((state) => open ?? !state)
  }

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-50 opacity-0 pointer-events-none lg:!opacity-0 lg:!pointer-events-none transition-opacity ${isMobilePopup ? '!opacity-100 !pointer-events-auto' : ''}`}
        onClick={() => handelSetModelPopup(false)}
      ></div>

      <a href="#" className="fixed left-0 top-1/2 -translate-y-1/2 lg:hidden px-4 py-2.5 bg-gray-100 border z-50"
        onClick={() => handelSetModelPopup()}
      >
        <FaSlidersH />
      </a>

      <div {...rest} ref={sidebarRef}
        className={twMerge(`
          fixed px-4 py-12 top-0 -left-72 bottom-0 z-50 w-72 overflow-y-auto transition-all bg-white ${isMobilePopup ? '!left-0' : ''}
          lg:static lg:w-72 lg:p-0 lg:z-auto lg:overflow-y-visible lg:left-0 lg:transition-none
        `, className)}
      >
        <div className="sidebar__inner">
          <div ref={sidebarContentRef}>
            <h6 className="text-lg font-bold uppercase">DANH MỤC BÀI VIẾT</h6>
            <div className="flex flex-col space-y-2 mt-4 mb-6 text-sm border-b pb-6">
              <a href="#" className='link text-gray-500'>
                <MdKeyboardArrowRight className='inline' /> Tin mới
              </a>
            </div>
            <h6 className="text-lg font-bold uppercase">Bài viết mới đăng</h6>
            <div className="flex flex-col space-y-3 mt-4">
              {new Array(5).fill(0).map((v,i) =>
                <div className="flex space-x-2" key={i}>
                  <div className="flex-none w-20 aspect-square bg-gray-200"></div>
                  <div className='flex-grow min-w-0'>
                    <h6 className="text-sm font-semibold line-clamp-3">Chân váy bí ngô đang "on-trend" mọi ngóc ngách, hứa hẹn sẽ tạo nên cơn sốt hè này</h6>
                    <div className="text-xs text-gray-500 mt-2">28 Tháng 4 năm 2023</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostSidebar