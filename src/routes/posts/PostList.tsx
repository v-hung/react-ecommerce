import { Link, NonIndexRouteObject, useLoaderData } from 'react-router-dom'
import Container from '../../components/Container'
import { Breadcrumb } from 'flowbite-react'
import { HiHome } from 'react-icons/hi'
import PostSingle from '../../components/post/PostSingle'
import PostSidebar from '../../components/post/PostSidebar'

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return {
    title: 'Tin mới',
    slug: 'tin-moi'
  }
}

const PostList = () => {
  const data = useLoaderData() as any

  return (
    <>
      <section>
        <Container className='py-6'>
          <Breadcrumb>
            <Breadcrumb.Item icon={HiHome}>
              <Link to={"/"}>Trang chủ</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{data.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </section>

      <section className='mb-6'>
        <Container id='main-content' className='flex'>
          <div className="w-full lg:w-2/3 xl:w-3/4">
            <div className="flex flex-wrap -mx-3">
              {new Array(10).fill(0).map((v,i) =>
                <div key={i} className="w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 px-3 mb-6">
                  <PostSingle />
                </div>
              )}
            </div>
          </div>
          <PostSidebar className='lg:w-1/3 xl:w-1/4 lg:ml-4'/>
        </Container>
      </section>
    </>
  )
}

PostList.loader = loader;

export default PostList