import { Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'

import Layout from 'components/system/layout'
import HomePage from 'components/pages/home'
import CharacterPage from 'components/pages/character'
import NotFoundPage from 'components/pages/not-found'
import routes from 'config/routes'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={routes.root} element={<HomePage />} />
      <Route path={routes.character} element={<CharacterPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
)

export default router
