import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import maltaLogo from '../../assets/images/logo.png'
import { HeaderBar, NavBar, Hamburguer, HeaderRow, NavMobile } from './styles'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLinks } from '../ItemLinks'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const location = useLocation()
  const currentPath = location.pathname

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
            <NavLinks />
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
