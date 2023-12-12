import { LinkItem } from './ItemLink'
import { ContainerNavLinks } from './styles'

export const NavLinks = () => {
  return (
    <ContainerNavLinks>
      <ul>
        <LinkItem link="/" title="Home" />
        <LinkItem link="/contact" title="Contact" />
      </ul>
    </ContainerNavLinks>
  )
}
