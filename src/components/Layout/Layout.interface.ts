import { ReactNode } from 'react'

export interface LayoutProps {
  title: ReactNode
  isFetching?: boolean
  rightSide?: ReactNode
  leftSide?: ReactNode
}
