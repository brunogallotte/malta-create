import { useState } from 'react'
import { Link } from 'react-router-dom'
import maltaLogo from '../../assets/images/logo.png'
import { HeaderBar, NavBar, Hamburguer, HeaderRow, NavMobile } from './styles'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLinks } from '../ItemLinks'
import { colors } from '../../styles'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const ToggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      window.scrollTo(0, 0)
    } else {
      setIsMenuOpen(true)
    }
  }

  return (
    <>
      <HeaderRow
        as={motion.div}
        initial={false}
        animate={{
          backgroundColor: isMenuOpen ? colors.white : 'transparent',
          position: isMenuOpen ? 'sticky' : 'relative',
          top: isMenuOpen ? 0 : 'auto',
          zIndex: isMenuOpen ? 20 : 0
        }}
        transition={{ duration: 0.4 }}
      >
        <HeaderBar className="container">
          <h1>
            <Link to="/">
              <img src={maltaLogo} alt="Malta Photography" />
            </Link>
          </h1>
          <Hamburguer onClick={ToggleMenu}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <NavBar>
            <NavLinks />
          </NavBar>
        </HeaderBar>
      </HeaderRow>
      {isMenuOpen ? (
        <AnimatePresence mode="wait">
          <NavMobile
            key="element"
            as={motion.div}
            initial={{ y: -360 }}
            animate={{ y: 0 }}
            exit={{ y: -360 }}
            transition={{ duration: 0.4 }}
          >
            <ul>
              <motion.li
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Link to="/">Overview</Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Link to="/contact">Contact</Link>
              </motion.li>
            </ul>
          </NavMobile>
        </AnimatePresence>
      ) : null}
    </>
  )
}

export default Header
