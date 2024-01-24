import { Link, Route, Routes } from 'react-router-dom'
import { Header } from './_AdminPartials/Header'
import './admin.layout.scss'
import { RequireAuth } from '@/routes/RequireAuth'
import { Suspense } from 'react'
import { routes } from '@/routes/private'

export const AdminLayout = () => {
  return (
    <RequireAuth>
      <div className="app">
        <Header />
        <main>
          <aside className="sidebar">
            SIDEBAR
            <nav>
              {routes
                .filter(route => route.path !== '*')
                .map(({ path, name }) => (
                  <Link to={path} key={path}>
                    {name}
                  </Link>
                ))}
              <Link to="orders">ORDERS</Link>
              <Link to="cart">CART</Link>
            </nav>
          </aside>
          <div className="content">
            <div className="stage">
              <Suspense fallback={<>LOADING...</>}>
                <Routes>
                  {routes.map(({ path, Component }) => (
                    <Route
                      path={path}
                      key={path}
                      element={<Component />}
                    ></Route>
                  ))}
                </Routes>
              </Suspense>
            </div>
            <footer className="app-footer">FOOTER</footer>
          </div>
        </main>
      </div>
    </RequireAuth>
  )
}
