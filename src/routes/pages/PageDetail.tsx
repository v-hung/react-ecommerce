import { NonIndexRouteObject } from "react-router-dom"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return null
}

const PageDetail = () => {
  return (
    <div>PageDetail</div>
  )
}

PageDetail.loader = loader

export default PageDetail