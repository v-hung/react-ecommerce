import { Navigate, Outlet, useLocation } from "react-router-dom";
import useUserStore from "../../stores/user";

const AuthProvider = () => {
  const user = useUserStore(state => state.user)
  const { pathname } = useLocation()

  if (!user) {
    return <Navigate to={`/account/login${pathname != '/' ? `?redirect_url=${pathname}` : ''}`} />
  }

  return <Outlet />
}

export default AuthProvider