import { Link, NonIndexRouteObject, useLoaderData } from "react-router-dom"
import Container from "../../components/Container"
import { Breadcrumb } from "flowbite-react"
import { HiHome } from "react-icons/hi"
import ImageZoom from "../../components/utils/ImageZoom"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  await new Promise(res => setTimeout(() => res(true), 1000))

  return {id: 1, name: 'afsdf'}
  throw new Response("Not Found", { status: 404 })
}

const ProductDetail = () => {
  const data = useLoaderData() as any

  return (
    <>
      <section>
        <Container className='py-4'>
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item icon={HiHome}>
              <Link to={"/"}>Trang chủ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to='/products'>Cửa hàng</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href='#'>{data.name}</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex flex-wrap -mx-4">
            <div className="w-2/5 px-4">
              <swiper-container class="mt-2 product-slide"
                navigation="true"
              >
                {new Array(7).fill(0).map((v,i) =>
                  <swiper-slide key={i}>
                    <ImageZoom src="http://ecommerce123.somee.com/uploads/Product/vn-11134201-7r98o-ltynyt6z9m1754.jpg"
                      className="w-full aspect-square"
                    />
                  </swiper-slide>
                )}
              </swiper-container>
            </div>
            <div className="flex-grow min-w-0">
              fsad
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

ProductDetail.loader = loader

export default ProductDetail
