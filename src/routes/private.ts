import { lazy } from 'react'

export const routes = [
  {
    path: '',
    name: 'Dashboard',
    Component: lazy(() => import('@/views/private/Dashboard'))
  },
  {
    path: 'users',
    name: 'Users',
    Component: lazy(() => import('@/views/private/Users'))
  },
  {
    path: 'products',
    name: 'Products',
    Component: lazy(() => import('@/views/private/Products'))
  },
  {
    path: '*',
    name: '404',
    Component: lazy(() => import('@/views/pages/404'))
  }
]
