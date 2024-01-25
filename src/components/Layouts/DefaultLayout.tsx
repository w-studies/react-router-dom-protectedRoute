import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
        <a href="https://reactrouter.com" target="_blank">
          <img
            src="/react-router.256x140.png"
            className="logo react-router"
            alt="React Router logo"
          />
        </a>
      </div>
      <h1>Vite + React + React Router</h1>
      <Outlet />
      <p className="read-the-docs">
        Click on the Vite, React and React Router logos to learn more
      </p>
    </>
  )
}
