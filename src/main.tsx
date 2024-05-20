import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router.tsx'
import { register } from 'swiper/element/bundle';
import dayjs from "dayjs"
import "dayjs/locale/vi"

dayjs.locale('vi')

register()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
