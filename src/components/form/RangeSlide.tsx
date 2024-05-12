import { FC, HTMLAttributes, useEffect, useRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { create, Options } from "nouislider";
import 'nouislider/dist/nouislider.css';
import "./RangeSlide.css"

type State = HTMLAttributes<HTMLDivElement> & {
  value?: (string | number)[],
  setValue?: React.Dispatch<React.SetStateAction<(string | number)[]>>,
  options?: Options
}

const RangeSlide: FC<State> = (props) => {
  const { 
    className, value, setValue, 
    options = {
      start: [0, 1000],
      connect: true,
      range: {
        min: 0,
        max: 1000
      }
    }, 
    ...rest 
  } = props

  const sliderEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sliderEl.current) return

    const slide = create(sliderEl.current, options)

    slide.on("update", (values, handle) => {
      if (setValue) {
        setValue(values)
      }
    })

    return () => {
      slide.destroy()
    }
  }, [])

  return (
    <div ref={sliderEl} {...rest} className={twMerge('px-2', className)}>
      
    </div>
  )
}

export default RangeSlide