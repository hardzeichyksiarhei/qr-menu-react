import { useRoutes } from 'react-router-dom'

import routes from './routes'

const Router = () => {
  const routing = useRoutes(routes())

  return routing
}

export default Router
