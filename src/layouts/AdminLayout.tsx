import { DefaultLayout } from './DefaultLayout'
import './admin.layout.scss'
export const AdminLayout = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div>LOGO</div> HEADER <a href="">Logoff</a>
      </header>
      <main>
        <aside className="sidebar">SIDEBAR</aside>
        <div className="content">
          <div className="stage">
            <DefaultLayout />
          </div>
          <footer className="app-footer">FOOTER</footer>
        </div>
      </main>
    </div>
  )
}
