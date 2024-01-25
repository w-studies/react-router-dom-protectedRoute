import { Link } from 'react-router-dom'
import { RoutesProps } from '../Types'

export const Sidebar = ({ routes }: { routes: RoutesProps[] }) => {
  return (
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
  )
}
