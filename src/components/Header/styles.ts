import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;

  img {
    width: 150px;
  }
`

export const NavBar = styled.nav`
  ul {
    display: flex;
    list-style: none;
    text-transform: uppercase;

    li {
      margin-right: 32px;
    }
  }
`
