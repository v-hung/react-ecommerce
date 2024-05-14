import { NonIndexRouteObject } from "react-router-dom"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return null
}

const Checkout = () => {
  return (
    <div>Checkout</div>
  )
}

Checkout.loader = loader

export default Checkout