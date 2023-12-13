import { styled } from 'styled-components'
import { breakpoints, colors, fontSize } from '../../styles'
import { NavLink } from 'react-router-dom'

export const ContainerNavLinks = styled.div`
  ul {
    display: flex;
    list-style: none;
    text-transform: uppercase;
    text-align: center;

    a {
      position: relative;
      font-size: ${fontSize.medium};
      font-weight: normal;
      letter-spacing: 2px;
      text-decoration: none;
      color: ${colors.black};
      cursor: pointer;
      text-align: center;
      transition: 0.8s;
      border-bottom: 3px solid white;
      margin-right: 24px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

export const ItemLink = styled(NavLink)`
  position: relative;
  colors: ${colors.black};

  .select {
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    height: 3px;
    background-color: ${colors.black};
  }
`
