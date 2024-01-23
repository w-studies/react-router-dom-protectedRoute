import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Login } from './views/Login'
import { AdminLayout } from './layouts/AdminLayout'

function App() {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminLayout />}></Route>
      <Route path="*" element={<DefaultLayout />}>
        <Route path="" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
