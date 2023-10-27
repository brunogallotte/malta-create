import { Link } from 'react-router-dom'
import maltaLogo from '../../assets/images/logo.png'
import { HeaderBar, NavBar } from './styles'

const Header = () => (
  <>
    <HeaderBar className="container">
      <h1>
        <Link to="/">
          <img src={maltaLogo} alt="Malta Photography" />
        </Link>
      </h1>
      <NavBar>
        <ul>
          <li>
            <Link to="/">overview</Link>
          </li>
          <li>personal</li>
          <li>contact</li>
        </ul>
      </NavBar>
    </HeaderBar>
  </>
)

export default Header
