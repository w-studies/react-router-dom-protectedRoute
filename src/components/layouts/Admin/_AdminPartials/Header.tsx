import { Link, useNavigate } from 'react-router-dom'

import { useAuthContext } from '@/contexts/useAuthContext'

export const Header = () => {
  const navigate = useNavigate()
  const auth = useAuthContext()
  return (
    <header className="app-header">
      <div>
        <Link to="../">LOGO</Link>
      </div>
      HEADER
      <Link
        to="/"
        onClick={() => {
          auth.signout(() => navigate('/'))
        }}
      >
        Logoff
      </Link>
    </header>
  )
}
