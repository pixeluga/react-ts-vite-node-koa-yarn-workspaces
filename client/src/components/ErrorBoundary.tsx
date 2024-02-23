import type { ReactNode } from 'react'
import { Component } from 'react'

type ErrorBoundaryProps = {
  children: ReactNode
}

type State = {
  err: Error | null
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps> {
  public state: State = {
    err: null,
  }

  static displayName: string

  public componentDidCatch(error: Error) {
    this.setState({ err: error })
  }

  public render() {
    const { err } = this.state
    const { children } = this.props
    if (err) {
      return <div>{err.message}</div>
    }

    return children
  }
}

ErrorBoundary.displayName = 'ErrorBoundary'
