import { NonIndexRouteObject } from "react-router-dom"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return null
}

const Contact = () => {
  return (
    <div>Contact</div>
  )
}

Contact.loader = loader

export default Contact