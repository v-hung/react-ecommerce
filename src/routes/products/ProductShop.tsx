import Container from '../../components/Container'
import { Breadcrumb } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import SingleProduct from '../../components/product/SingleProduct'
import ShopSideBar, { ShopSideBarForWardRefState } from '../../components/product/ShopSideBar'
import { FaSlidersH } from 'react-icons/fa'
import { useRef, useState } from 'react'
import Pagination from '../../components/Pagination'

const ProductShop = () => {

  const sidebarRef = useRef<ShopSideBarForWardRefState>(null)

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
        <Container id='main-content' className='flex lg:space-x-8'>
          <ShopSideBar className='lg:flex-none lg:w-72' ref={sidebarRef} />

          <div className="flex-grow min-w-0">
            <div className="flex justify-between items-center">
              <span className="lg:hidden px-4 py-2.5 bg-gray-100 border mr-4"
                onClick={() => sidebarRef.current?.handelSetModelPopup(true)}
              >
                <FaSlidersH />
              </span>
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
                <div className="w-1/2 md:w-1/3 px-2 mb-4" key={i}>
                  <SingleProduct />
                </div>
              )}
            </div>

            <Pagination className='mt-6' />
          </div>
        </Container>
      </section>
    </>
  )
}

export default ProductShop