import Header from './components/Header'
import { GlobalCss } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
