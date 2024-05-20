import { Table } from 'flowbite-react'
import { FC, HTMLAttributes } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

type State = HTMLAttributes<HTMLDivElement>

const ProfileOrders: FC<State> = (props) => {
  const { className, ...rest } = props
  return (
    <div {...rest} className={twMerge('mt-4', className)}>
      <div className="flex items-center space-x-2">
        <FaShoppingCart className="text-primary-500" />
        <span className="text-lg md:text-xl font-bold">Đơn hàng đã đặt</span>
      </div>

      <div className='mt-6'>
        <div className="overflow-x-auto">
          <Table>
            <Table.Head>
              <Table.HeadCell>Mã hóa đơn</Table.HeadCell>
              <Table.HeadCell>Sản phẩm</Table.HeadCell>
              <Table.HeadCell>Tổng tiền</Table.HeadCell>
              <Table.HeadCell>Trạng thái</Table.HeadCell>
              <Table.HeadCell>Ngày mua</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Hành động</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>INVAUOR16AICI-20240505</Table.Cell>
                <Table.Cell>
                  <div className="flex space-x-2">
                    <div className="flex-none w-10 h-10 bg-gray-100"></div>
                    <div>
                      <div className="font-semibold truncate">Sản phẩm 1</div>
                      <p className="text-gray-500 text-xs mt-1">x1</p>
                    </div>
                  </div>
                </Table.Cell>
                <Table.Cell>35,000 ₫</Table.Cell>
                <Table.Cell>Chờ xử lý</Table.Cell>
                <Table.Cell>05/05/2024</Table.Cell>
                <Table.Cell>
                  <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                    Xem
                  </a>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default ProfileOrders