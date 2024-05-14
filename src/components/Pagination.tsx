import { FC, HTMLAttributes, useCallback } from 'react'
import { twMerge } from 'tailwind-merge'
import { usePagination } from '../lib/pagination'
import { Link, useSearchParams } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

type State = HTMLAttributes<HTMLUListElement> & {
  maxPage?: number
}

const Pagination: FC<State> = (props) => {
  const { className, maxPage = 1, ...rest } = props

  const [searchParams, setSearchParams] = useSearchParams()
  const page = +(searchParams.get("page") ?? 1)
  const perPage = +(searchParams.get("perPage") ?? 12)

  const { pages } = usePagination(page, maxPage)

  const getLink = useCallback((page: number | null) => {
    if (!page) return "#"

    const updatedSearchParams = new URLSearchParams(searchParams)
    updatedSearchParams.set("page", page.toString())

    return "?" + updatedSearchParams.toString()
  }, [searchParams])

  return (
    <ul {...rest} className={twMerge('flex space-x-3', className)}>
      <li>
        <Link 
          to={getLink(page - 1)}
          className={`link w-10 h-10 grid place-items-center border hover:border-primary-300 ${page == 1 ? 'disabled' : ''}`}
        >
          <FaChevronLeft />
        </Link>
      </li>

      { pages.map((v,i) =>
        <li key={i}>
          <Link 
            to={getLink(v.page)}
            className={`link block h-10 px-4 py-2 border hover:border-primary-300 ${!v.page ? 'disabled' : ''} ${v.active ? '!border-primary-300' : ''}`}
          >
            {v.label}
          </Link>
        </li>
      )}

      <li>
        <Link 
          to={getLink(page + 1)}
          className={`link w-10 h-10 grid place-items-center border hover:border-primary-300 ${page == maxPage ? 'disabled' : ''}`}
        >
          <FaChevronRight />
        </Link>
      </li>
    </ul>
  )
}

export default Pagination