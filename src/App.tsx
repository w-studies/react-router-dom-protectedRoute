import './scss/App.scss'

import { Route, Routes } from 'react-router-dom'

import { AdminLayout, DefaultLayout } from './components'
import { AuthProvider } from './providers'
import { Login } from './views/public/Login'

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
