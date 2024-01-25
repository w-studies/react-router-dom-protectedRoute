import { Route, Routes } from 'react-router-dom'
import './scss/App.scss'
import { Login } from './views/public/Login'
import { AdminLayout, DefaultLayout } from './components'
import { AuthProvider } from './providers'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />}></Route>
        <Route path="*" element={<DefaultLayout />}>
          <Route path="" element={<Login />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
