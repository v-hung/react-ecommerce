import { NonIndexRouteObject } from "react-router-dom"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return null
}

const Cart = () => {
  return (
    <div>Cart</div>
  )
}

Cart.loader = loader

export default Cart