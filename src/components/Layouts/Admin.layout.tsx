import { Outlet } from 'react-router-dom'

export const Admin = () => {
  return (
    <div className="app">
      <header className="app-header">HEADER</header>
      <main>
        <aside>SIDEBAR</aside>
        <div className="content">
          <div className="stage">
            STAGE
            <Outlet />
          </div>
          <footer className="app-footer">FOOTER</footer>
        </div>
      </main>
    </div>
  )
}
