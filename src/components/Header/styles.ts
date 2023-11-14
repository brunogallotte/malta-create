import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 80px;

  img {
    width: 250px;
  }

  h1 {
    line-height: 0px;
    align-items: center;
  }
`

export const NavBar = styled.nav`
  ul {
    display: flex;
    list-style: none;
    text-transform: uppercase;

    li,
    a {
      font-size: 18px;
      font-weight: normal;
      letter-spacing: 4px;
      text-decoration: none;
      color: ${colors.black};
      cursor: pointer;
      text-align: center;
      transition: 0.8s;
      border-bottom: 3px solid white;
    }

    a:hover {
      color: ${colors.gray};
    }

    li {
      margin-right: 32px;
    }

    .bg-dark {
      // background-color: ${colors.black};
      color: ${colors.black};
      padding: 8px;
      border-bottom: 3px solid black;
    }
  }
`
