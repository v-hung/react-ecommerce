import { FC, InputHTMLAttributes, MouseEvent, useRef } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

type State = InputHTMLAttributes<HTMLInputElement> & {
  min?: number,
  max?: number,
  parentClassName?: string
}

const TouchSpin: FC<State> = (props) => {
  const { parentClassName, onChange, min, max, ...rest } = props

  const inputEl = useRef<HTMLInputElement>(null)

  const handelChange = (e : MouseEvent, delta: 1 | -1) => {
    e.preventDefault()

    if (!inputEl.current) return

    let newValue = +inputEl.current.value + delta

    if (min !== undefined && newValue < min) newValue = min;
    if (max !== undefined && newValue > max) newValue = max;

    if (!rest.value) {
      inputEl.current.value = newValue.toString()
    }

    const syntheticEvent = {
      ...e,
      target: { ...inputEl.current, value: newValue },
    } as any;

    onChange?.(syntheticEvent)
  }

  return (
    <div className={twMerge('inline-flex border min-h-10 items-stretch text-center', parentClassName)}>
      <a href="#" className="w-10 border-r grid place-items-center" onClick={(e) => handelChange(e, -1)}>
        <FaMinus />
      </a>
      <input  type="number" className='w-10 focus:ring-0 border-none !px-2 text-center font-bold !appearance-none' 
        ref={inputEl}
        {...rest} onChange={onChange}
      />
      <a href="#" className="w-10 border-l grid place-items-center" onClick={(e) => handelChange(e, 1)}>
        <FaPlus />
      </a>
    </div>
  )
}

export default TouchSpin