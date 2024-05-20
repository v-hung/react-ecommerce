import { FC, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Post } from '../../types/post'
import dayjs from 'dayjs'
import { getImage } from '../../lib/helper'

type State = HTMLAttributes<HTMLDivElement> & {
  post: Post
}

const PostSingle: FC<State> = (props) => {
  const { className, post, ...rest } = props

  return (
    <div {...rest} className={twMerge('', className)}>
      <Link to={`/posts/${post.slug}`} className="block relative w-full max-w-80 aspect-square bg-gray-200">
        <img src={getImage(post.image)} alt={post.title} className='w-full h-full object-cover' />
        <div className="absolute top-2 left-2 flex flex-col text-white text-center uppercase font-bold bg-gray-500 px-2.5 py-1">
          <span>{dayjs(post.createdAt).format("DD")}</span>
          <span className='text-xs'>{dayjs(post.createdAt).format("MMM")}</span>
        </div>
      </Link>
      <div className="py-4 flex flex-col space-y-2">
        <h6>
          <Link to={`/posts/${post.slug}`} className='line-clamp-2 font-semibold text-lg'>{post.title}</Link>
        </h6>
        <p className='line-clamp-3 text-gray-500 text-sm'>{post.description}</p>
        <p className="text-xs text-gray-500">{post.views} lượt xem</p>
      </div>
    </div>
  )
}

export default PostSingle

export const PostSingleShimmer = () => {
  return (
    <div className='animate-pulse'>
      <div className="block relative w-full aspect-square bg-slate-200"></div>
      <div className="py-4 flex flex-col space-y-2">
        <div className="w-full h-4 rounded-full bg-slate-200"></div>
        <div className="w-60 h-4 rounded-full bg-slate-200"></div>

        <div className="w-full h-2.5 rounded-full bg-slate-200 !mt-4"></div>
        <div className="w-full h-2.5 rounded-full bg-slate-200"></div>
        <div className="w-60 h-2.5 rounded-full bg-slate-200"></div>

        <div className="w-20 h-2.5 rounded-full bg-slate-200 !mt-4"></div>
      </div>
    </div>
  )
}