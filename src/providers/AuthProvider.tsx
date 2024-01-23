import { AuthContext } from '@/contexts'
import { AuthService } from '@/services/AuthService'
import React from 'react'

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<string | null>()

  const signin = (newUser: string, callback: VoidFunction) => {
    return AuthService.signin(() => {
      setUser(newUser)
      callback()
    })
  }

  const signout = (callback: VoidFunction) => {
    return AuthService.signout(() => {
      setUser(null)
      callback()
    })
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}