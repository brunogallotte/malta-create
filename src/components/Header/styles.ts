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

  .stick {
    position: sticky;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  
  @media (max-width: ${breakpoints.tablet}) {
    flex: 1;
    justify-content: space-between;

    ul {
      display: none;
    }

    .open {
      position: sticky;
      top: 0;
      z-index: 20;
    }
`

export const NavBar = styled.nav`
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Hamburguer = styled.div`
  width: 32px;
  cursor: pointer;
  z-index: 21;

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
  align-items: center;
  position: fixed;
  background-color: ${colors.white};
  height: 100vh;
  width: 100%;
  z-index: 20;

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
    font-size: 36px;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
  }
`
