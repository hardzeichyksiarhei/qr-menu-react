import { useRoutes } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'

import routes from './routes'

const Router = () => {
  const auth = useAuth()

  const routing = useRoutes(routes(auth.isAuth))

  return routing
}

export default Router
