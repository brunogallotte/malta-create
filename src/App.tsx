import { GlobalCss } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import { Nike } from './pages/nike'
import { Kawasaki } from './pages/kawasaki'
import PowerPeak from './pages/powerpeak'
import Personal from './pages/personal'
import Contact from './pages/contact'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/categories/nike',
    element: <Nike />
  },
  {
    path: '/categories/kawasaki',
    element: <Kawasaki />
  },
  {
    path: '/categories/powerpeak',
    element: <PowerPeak />
  },
  {
    path: '/categories',
    element: <Personal />
  },
  {
    path: '/contact',
    element: <Contact />
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
