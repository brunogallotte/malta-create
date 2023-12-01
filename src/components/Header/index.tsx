import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import maltaLogo from '../../assets/images/logo.png'
import { HeaderBar, NavBar, Hamburguer, HeaderRow, NavMobile } from './styles'
import { AnimatePresence, motion } from 'framer-motion'

const Header = () => {
  const tabs = [
    { id: '/', label: 'overview' },
    { id: '/contact', label: 'contact' }
  ]

  const [activeTab, setActiveTab] = useState('/')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const location = useLocation()
  const currentPath = location.pathname

  useEffect(() => {
    setActiveTab(currentPath)
  }, [currentPath])

  const isTabActive = (tabId: any) => {
    if (tabId === '/categories') {
      // Verifica se a URL atual começa com "/categories"
      return currentPath.startsWith('/categories')
    }
    return currentPath === tabId
  }

  const ToggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    } else {
      setIsMenuOpen(true)
    }
  }

  return (
    <>
      <HeaderRow>
        <HeaderBar className="container">
          <Hamburguer onClick={ToggleMenu}>
            <span />
            <span />
            <span />
          </Hamburguer>
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
                      (tab.id === '/' &&
                        currentPath.startsWith('/categories')) ||
                      isTabActive(tab.id)
                        ? 'bg-dark'
                        : 'transparent'
                    }`}
                  >
                    {tab.label}
                  </Link>
                </li>
              ))}
            </ul>
          </NavBar>
        </HeaderBar>
      </HeaderRow>
      {isMenuOpen ? (
        <AnimatePresence>
          <NavMobile
            as={motion.div}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <ul>
              <li>
                <Link to="/">Overview</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </NavMobile>
        </AnimatePresence>
      ) : null}
    </>
  )
}

export default Header
