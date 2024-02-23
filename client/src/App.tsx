import { BrowserRouter as Router } from 'react-router-dom'
import ErrorBoundary from 'src/components/ErrorBoundary'
import Routes from 'src/routes'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes />
      </Router>
    </ErrorBoundary>
  )
}

export default App
