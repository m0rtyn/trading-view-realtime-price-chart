/* eslint-disable max-lines */
import MainLayout from 'features/main-layout'
import { DevPage } from 'pages/dev-page'
import { Route, Routes } from 'react-router-dom'
import { RouterPathes } from 'shared/constants'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path={'/'}
          element={<DevPage />}
        />
      </Route>
    </Routes>
  )
}
