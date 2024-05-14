import { FC, HTMLAttributes, MouseEvent, useRef } from 'react'
import { useResizeDetector } from 'react-resize-detector'
import { twMerge } from 'tailwind-merge'

type State = HTMLAttributes<HTMLDivElement> & {
  src?: string
}

const ImageZoom: FC<State> = (props) => {
  const { className, src, ...rest } = props

  const imgEl = useRef<HTMLImageElement>(null)

  const onZoom = (e: MouseEvent) => {
    if (!imgEl.current) return

    const x = e.clientX - (e.currentTarget as HTMLDivElement).getBoundingClientRect().left;
    const y = e.clientY - (e.currentTarget as HTMLDivElement).getBoundingClientRect().top;

    imgEl.current.style.transformOrigin = `${x}px ${y}px`;
    imgEl.current.style.transform = "scale(2.5)";
    imgEl.current.style.transition = null as any;
  }

  const offZoom = () => {
    if (!imgEl.current) return

    imgEl.current.style.transformOrigin = `center center`;
    imgEl.current.style.transition = `none`;
    imgEl.current.style.transform = "scale(1)";
  }

  return (
    <div 
      onMouseEnter={onZoom} 
      onMouseMove={onZoom}
      onMouseLeave={offZoom}
      {...rest} className={twMerge('overflow-hidden', className)}
    >
      <img ref={imgEl} src={src} className='w-full h-full transition-transform' loading='lazy' />
    </div>
  )
}

export default ImageZoom