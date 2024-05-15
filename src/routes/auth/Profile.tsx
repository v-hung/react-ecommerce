import { NonIndexRouteObject } from "react-router-dom"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return null
}

const Profile = () => {
  return (
    <>
      d
    </>
  )
}

Profile.loader = loader

export default Profile