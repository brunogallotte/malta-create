import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  height: 80px;

  img {
    width: 250px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 200px;
    }
  }

  h1 {
    line-height: 0px;
    align-items: center;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${breakpoints.tablet}) {
    flex: 1;
    justify-content: space-between;

    ul {
      display: none;
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

    @media (max-width: ${breakpoints.tablet}) {
      display: none;
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

export const Hamburguer = styled.div`
  width: 32px;
  cursor: pointer;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.black};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const NavMobile = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }

  li {
    padding: 16px;
    list-style: none;
    text-align: center;
  }

  a {
    color: ${colors.black};
    font-size: 18px;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
  }
`
