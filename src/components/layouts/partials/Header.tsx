import { FC, HTMLAttributes, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Container from '../../Container'
import { Avatar, Button, Drawer, Dropdown, Kbd, MegaMenu, Modal, Navbar, TextInput } from 'flowbite-react'
import useWebStore from '../../../stores/web'
import { createPortal } from 'react-dom'
import useUserStore from '../../../stores/user'
import { Link } from 'react-router-dom'
import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa'

type State = HTMLAttributes<HTMLDivElement>

const Header: FC<State> = (props) => {
  const { className, ...rest } = props

  const { logo, title} = useWebStore()
  const { user, logout } = useUserStore()

  return (
    <div {...rest} className={twMerge('bg-white sticky top-0 z-30 border-b', className)}>
      <Container>
        <MegaMenu className='!px-0'>
          <div className="w-full flex items-center justify-between space-x-4 xl:space-x-8">
            <a href="#" className='block lg:hidden px-4 py-2.5 rounded-lg bg-gray-50 mr-4'>
              <FaBars />
            </a>

            <Navbar.Brand as={Link} to="/" className='!ml-0 !mr-auto lg:!mr-0'>
              <img alt="" src={logo} className="mr-3 h-6 sm:h-9" loading='lazy' />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{title}</span>
            </Navbar.Brand>
            <div className="order-2 hidden items-center sm:flex">
              <HeaderSearch />
              <HeaderCart />

              { user
                ? <Dropdown label="" 
                    renderTrigger={() => <div className='ml-2 cursor-pointer'><Avatar rounded /></div>}
                    placement='bottom-end'
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">{user.name}</span>
                      <span className="block truncate text-sm font-medium">{user.email}</span>
                    </Dropdown.Header>
                    <Dropdown.Item as={Link} to="/profile">Hồ sơ</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className='text-red-500' onClick={() => logout()}>Đăng xuất</Dropdown.Item>
                  </Dropdown>
                : <>
                  <Link
                    to="/account/login"
                    className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
                  >
                    Đăng nhập
                  </Link>
                  <Button as={Link} to="/account/register">Đăng ký</Button>
                </>
              }
            </div>

            {/* <Navbar.Toggle /> */}

            <Navbar.Collapse className='md:hidden lg:block'>
              {/* <Navbar.Link as={Link} to="/">Trang chủ</Navbar.Link> */}
              <Navbar.Link as={Link} to="/pages/about">Về chúng tôi</Navbar.Link>
              <Navbar.Link as={Link} to="/products">Cửa hàng</Navbar.Link>
              <Navbar.Link as={'div'}>
                <MegaMenu.Dropdown toggle={<>Danh mục sản phẩm</>}>
                  <ul className="grid grid-cols-3">
                    <div className="space-y-4 p-4">
                      <li>
                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                          Library
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                          Resources
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                          Pro Version
                        </a>
                      </li>
                    </div>
                    <div className="space-y-4 p-4">
                      <li>
                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                          Support Center
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                          Terms
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                          Blog
                        </a>
                      </li>
                    </div>
                    <div className="space-y-4 p-4">
                      <li>
                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                          Newsletter
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                          Playground
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                          License
                        </a>
                      </li>
                    </div>
                  </ul>
                </MegaMenu.Dropdown>
              </Navbar.Link>
              <Navbar.Link as={Link} to="/blogs/news">Tin tức</Navbar.Link>
              <Navbar.Link as={Link} to="/pages/contact">Liên hệ</Navbar.Link>
            </Navbar.Collapse>
          </div>
        </MegaMenu>
      </Container>
    </div>
  )
}

export default Header

const HeaderSearch = () => {
  const [openModal, setOpenModal] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault()
        setOpenModal(true)
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <a href="#" className='px-4 py-2.5 rounded-lg hover:bg-gray-50' onClick={() => setOpenModal(true)}>
        <FaSearch />
      </a>

      <Modal 
        position="top-center" size="xl" className='pt-12' 
        dismissible
        show={openModal} onClose={() => setOpenModal(false)}
        initialFocus={searchInputRef}
      >
        <div className="p-4 border-b">
          <TextInput 
            ref={searchInputRef} 
            icon={() => <FaSearch/>} 
            rightIcon={() => <Kbd>Ctrl + K</Kbd>}
            placeholder='Tìm kiếm ...' 
          />
        </div>
        <div className="min-h-20 p-4">
          <p className="text-sm">Nhập nội dung cần tìm kiếm</p>
        </div>
      </Modal>
    </>
  )
}

const HeaderCart = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <a href="#" className='px-4 py-2.5 rounded-lg hover:bg-gray-50' onClick={() => setIsOpen(true)}>
        <FaShoppingCart />
      </a>

      {createPortal(
        <Drawer position='right' open={isOpen} onClose={() => setIsOpen(false)} className='z-50'>
          <Drawer.Header titleIcon={() => <span className='icon text-base pr-2'>shopping_cart</span>} title="Giỏ hàng" />
          <Drawer.Items>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Supercharge your hiring by taking advantage of our&nbsp;
              <a href="#" className="text-cyan-600 underline hover:no-underline dark:text-cyan-500">
                limited-time sale
              </a>
              &nbsp;for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
              job board.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Button outline>Giỏ hàng</Button>
              <Button>Thanh toán</Button>
            </div>
          </Drawer.Items>
        </Drawer>,
        document.body
      )}
    </>
  )
}