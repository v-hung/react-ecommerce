import { FileInput, Label, TextInput, Textarea } from 'flowbite-react'
import { FC, HTMLAttributes } from 'react'
import { FaUser } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

type State = HTMLAttributes<HTMLDivElement>

const ProfileInfo: FC<State> = (props) => {
  const { className, ...rest } = props
  return (
    <div {...rest} className={twMerge('mt-4', className)}>
      <div className="flex items-center space-x-2">
        <FaUser className="text-primary-500" />
        <span className="text-lg md:text-xl font-bold">Thông tin cá nhân</span>
      </div>

      <form action="" className='flex flex-wrap -mx-3 -mb-6 mt-6'>
        <div className='w-full px-3 mb-6 flex items-center space-x-4'>
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gray-100"></div>
          <FileInput className='inline-flex' required />
        </div>
        <div className='w-full md:w-1/2 px-3 mb-6'>
          <div className="mb-2 block">
            <Label htmlFor="fullName" value="Tên của bạn" /> 
            <span className="text-red-500">*</span>
          </div>
          <TextInput id="fullName" name="fullName" type="text" required />
        </div>
        <div className='w-full md:w-1/2 px-3 mb-6'>
          <div className="mb-2 block">
            <Label htmlFor="fullName" value="Số điện thoại" /> 
            <span className="text-red-500">*</span>
          </div>
          <TextInput required />
        </div>
        <div className='w-full px-3 mb-6'>
          <div className="mb-2 block">
            <Label htmlFor="fullName" value="Email" /> 
            <span className="text-red-500">*</span>
          </div>
          <TextInput required />
        </div>
        
        <div className='w-full px-3 mb-6'>
          <div className="mb-2 block">
            <Label htmlFor="fullName" value="Địa chỉ" /> 
            <span className="text-red-500">*</span>
          </div>
          <Textarea />
        </div>

        <div className='w-full px-3 mb-6'>
          <div className="border border-gray-300 rounded p-6">
            <h6 className="font-semibold mb-6 text-lg md:text-xl">Đổi mật khẩu</h6>
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="fullName" value="Mật khẩu cũ" />
                <span className="text-red-500">*</span>
              </div>
              <TextInput required />
            </div>
            
            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="fullName" value="Mật khẩu mới" />
                <span className="text-red-500">*</span>
              </div>
              <TextInput required />
            </div>

            <div className="mb-6">
              <div className="mb-2 block">
                <Label htmlFor="fullName" value="Nhập lại mật khẩu mới" />
                <span className="text-red-500">*</span>
              </div>
              <TextInput required />
            </div>
          </div>
        </div>
      </form>

    </div>
  )
}

export default ProfileInfo