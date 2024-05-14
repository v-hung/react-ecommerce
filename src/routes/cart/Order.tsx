import { NonIndexRouteObject } from "react-router-dom"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return null
}

const Order = () => {
  return (
    <div>Order</div>
  )
}

Order.loader = loader

export default Order