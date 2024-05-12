import { useCallback, useEffect, useRef } from 'react'
import Container from '../../components/Container'
import { Breadcrumb } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import StickySidebar from 'sticky-sidebar';
import SingleProduct from '../../components/product/SingleProduct'
import ShopSideBar from '../../components/product/ShopSideBar'
import { useResizeDetector } from 'react-resize-detector'

const ProductShop = () => {

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
        topSpacing: 95,
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

  // useEffect(() => {
  //   if (!sidebarRef.current) return

  //   sidebar.current = new StickySidebar(sidebarRef.current, {
  //     topSpacing: 95,
  //     bottomSpacing: 20,
  //     containerSelector: '#main-content',
  //     innerWrapperSelector: '.sidebar__inner'
  //   })
    
  //   return () => {
  //     sidebar.current?.destroy()
  //   };
  // }, [])

  return (
    <>
      <section className='bg-cover w-full h-32 md:h-52' style={{backgroundImage: `url(/imgs/banners/banner-top.jpg)`}}>
        <Container className='h-full flex items-center'>
          <h3 className='px-12 md:px-20 text-3xl md:text-4xl lg:text-5xl font-bold'>Cửa hàng</h3>
        </Container>
      </section>

      <section>
        <Container className='py-4'>
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={HiHome}>
              <Link to={"/"}>Trang chủ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href='#'>Cửa hàng</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </section>

      <section className='pb-8'>
        <Container id='main-content' className='flex lg:space-x-4'>
          <div className="sidebar flex-none hidden lg:block w-72" ref={sidebarRef}>
            <div className="sidebar__inner">
              <ShopSideBar ref={sidebarContentRef} />
            </div>
          </div>

          <div className="flex-grow min-w-0">
            <div className="flex justify-between items-center">
              <a href="#" className="lg:hidden px-4 py-1 bg-gray-100 border mr-4"><span className="icon text-xl">tune</span></a>
              <div className='mr-auto'>
                <label className='hidden lg:inline mr-4'>Săp xếp theo</label>
                <select className='lg:w-60' defaultValue={1}>
                  <option value={1} disabled>Mặc định</option>
                  <option value={2}>Giá tăng dần</option>
                </select>
              </div>
              <div>
                <label className='hidden lg:inline mr-4'>Săp xếp theo</label>
                <select className='w-20' defaultValue={1}>
                  <option value={1} disabled>10</option>
                  <option value={2}>20</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap -mx-2 mt-6">
              {new Array(21).fill(0).map((v,i) =>
                <div className="w-1/2 md:w-1/3 px-2" key={i}>
                  <SingleProduct />
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ProductShop