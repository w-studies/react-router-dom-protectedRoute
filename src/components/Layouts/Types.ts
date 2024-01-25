import { LazyExoticComponent } from 'react'

export type RoutesProps = {
  name: string
  path: string
  Component: LazyExoticComponent<() => JSX.Element>
}
