import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { NavLink } from 'react-router-dom'

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

  .fixed {
    position: fixed;
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
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
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
  align-items: center;
  position: fixed;
  background-color: ${colors.white};
  height: 100%;
  width: 100%;
  z-index: 1;

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
