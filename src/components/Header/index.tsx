import maltaLogo from '../../assets/images/logo.png'
import { HeaderBar, NavBar } from './styles'

const Header = () => (
  <>
    <HeaderBar className="container">
      <h1>
        <img src={maltaLogo} alt="Malta Photography" />
      </h1>
      <NavBar>
        <ul>
          <li>overview</li>
          <li>personal</li>
          <li>contact</li>
        </ul>
      </NavBar>
    </HeaderBar>
  </>
)

export default Header
