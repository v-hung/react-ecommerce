import { Breadcrumb } from 'flowbite-react'
import { FC, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import Container from '../../Container'
import { HiHome } from 'react-icons/hi'
import { Link } from 'react-router-dom'

type State = HTMLAttributes<HTMLDivElement> & {
  title: string,
  breadcrumbs: {
    title: string,
    path?: string
  }[]
}

const PageHeader: FC<State> = (props) => {
  const { className, title, breadcrumbs, ...rest } = props
  return (
    <div {...rest} className={twMerge('py-6 md:py-12', className)}>
      <Container className='flex flex-col items-center'>
        <Breadcrumb>
          <Breadcrumb.Item icon={HiHome}>
            <Link to={"/"}>Trang chủ</Link>
          </Breadcrumb.Item>
          {breadcrumbs.map((v,i) =>
            <Breadcrumb.Item key={i}>
              <Link to={v.path || "#"}>{v.title}</Link>
            </Breadcrumb.Item>
          )}
        </Breadcrumb>
        <h1 className='text-2xl font-bold mt-4'>{title}</h1>
      </Container>
    </div>
  )
}

export default PageHeader