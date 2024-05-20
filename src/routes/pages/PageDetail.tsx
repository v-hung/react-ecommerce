import { NonIndexRouteObject } from "react-router-dom"
import Container from "../../components/Container"

const loader: NonIndexRouteObject["loader"] = async ({params}) => {
  return null
}

const PageDetail = () => {
  return (
    <>
      <section>
        <Container className="text-center py-6">
          <p className="text-primary-600 font-semibold text-xl">Thông tin hóa đơn</p>
        </Container>
      </section>
    </>
  )
}

PageDetail.loader = loader

export default PageDetail