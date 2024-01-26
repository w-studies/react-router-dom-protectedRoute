import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { RoutesProps } from '@/components/Layouts/Types'

export const Stage = ({ routes }: { routes: RoutesProps[] }) => {
  return (
    <div className="stage">
      <Suspense fallback={<>LOADING...</>}>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route path={path} key={path} element={<Component />}></Route>
          ))}
        </Routes>
      </Suspense>
    </div>
  )
}
