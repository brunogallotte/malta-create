import { GlobalCss } from './styles'
import {
  createBrowserRouter,
  RouterProvider,
  useLocation
} from 'react-router-dom'
import Home from './pages/home'
import { Nike } from './pages/personal/nike'
import { Kawasaki } from './pages/personal/kawasaki'
import PowerPeak from './pages/personal/powerpeak'
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
