import React from "react"
import * as Sentry from "@sentry/browser"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      errorInfo: null,
    }
  }

  componentDidCatch(error, errorInfo) {
    try {
      this.setState({
        error,
        errorInfo,
      })
      Sentry.configureScope(scope => {
        Object.keys(errorInfo).forEach(key => {
          scope.setExtra(key, errorInfo[key])
        })
      })
      Sentry.captureException(error)
    } catch (error) {
      console.log(error, "componentDidCatch..........")
    }
  }

  render() {
    try {
      if (this.state.error) {
        // render fallback UI
        console.log(this.state.errorInfo)
        return (
          <>
            <h1> Something went wrong! </h1>{" "}
          </>
        )
      } else {
        // when there's not an error, render children untouched
        return this.props.children
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default ErrorBoundary
