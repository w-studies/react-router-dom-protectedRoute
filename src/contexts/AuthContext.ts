import { createContext } from 'react'

export const AuthContext = createContext<AuthContextProps>(null!)

type AuthContextProps = {
  user?: string
  signin: (user: string, callback: VoidFunction) => void
  signout: (callback: VoidFunction) => void
}
