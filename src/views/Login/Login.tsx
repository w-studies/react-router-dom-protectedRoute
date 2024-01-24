import { useAuthContext } from '@/contexts/useAuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const auth = useAuthContext()
  const navigate = useNavigate()
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const username = formData.get('username') as string

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate('admin', { replace: true })
    })
  }
  return (
    <div className="card">
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" autoFocus defaultValue="any username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" defaultValue="any password" />
        </div>
        <div className="text-end">
          <button>Login</button>
        </div>
      </form>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p>
        <Link to="/admin">Try this protectec route: /admin</Link>
      </p>
      <Link to="/admin/users">Try this protectec route: /admin/users</Link>
    </div>
  )
}

export default Login
