import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="card">
      <form method="post">
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" autoFocus value="any username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value="any password" />
        </div>
        <div className="text-end">
          <button>Login</button>
        </div>
      </form>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p>
        <Link to="/admin">Try this protectec route /admin</Link>
      </p>
      <Link to="/admin/users">Try this protectec route /admin/users</Link>
    </div>
  )
}

export default Login
