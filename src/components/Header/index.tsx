import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import maltaLogo from '../../assets/images/logo.png'
import { HeaderBar, NavBar } from './styles'

const Header = () => {
  const tabs = [
    { id: '/', label: 'overview' },
    { id: '/categories', label: 'personal' },
    { id: '/contact', label: 'contact' }
  ]

  const [activeTab, setActiveTab] = useState('/')

  const location = useLocation()
  const currentPath = location.pathname

  useEffect(() => {
    setActiveTab(currentPath)
  }, [currentPath])

  console.log(currentPath)

  const isTabActive = (tabId: any) => {
    if (tabId === '/categories') {
      // Verifica se a URL atual começa com "/categories"
      return currentPath.startsWith('/categories')
    }
    return currentPath === tabId
  }

  return (
    <>
      <HeaderBar className="container">
        <h1>
          <Link to="/">
            <img src={maltaLogo} alt="Malta Photography" />
          </Link>
        </h1>
        <NavBar>
          <ul>
            {tabs.map((tab) => (
              <li key={tab.id}>
                <Link
                  to={tab.id}
                  className={`${
                    isTabActive(tab.id) ? 'bg-dark' : 'transparent'
                  }`}
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </NavBar>
      </HeaderBar>
    </>
  )
}

export default Header
