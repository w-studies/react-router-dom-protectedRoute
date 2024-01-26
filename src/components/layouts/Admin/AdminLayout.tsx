import './admin.layout.scss'

import { RequireAuth, routes } from '@/routes'

import { Header, Sidebar, Stage } from './_AdminPartials'
export const AdminLayout = () => {
  return (
    <RequireAuth>
      <div className="app">
        <Header />
        <main>
          <Sidebar routes={routes} />
          <div className="content">
            <Stage routes={routes} />
            <footer className="app-footer">FOOTER</footer>
          </div>
        </main>
      </div>
    </RequireAuth>
  )
}
