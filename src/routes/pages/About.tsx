import { NonIndexRouteObject } from "react-router-dom"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return null
}

const About = () => {
  return (
    <div>About</div>
  )
}

About.loader = loader

export default About