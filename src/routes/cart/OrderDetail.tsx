import { NonIndexRouteObject } from "react-router-dom"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return null
}

const OrderDetail = () => {
  return (
    <div>OrderDetail</div>
  )
}

OrderDetail.loader = loader

export default OrderDetail