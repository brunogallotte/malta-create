import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  margin-top: 40px;
  background-color: ${colors.black};
  color: ${colors.gray};
  width: 100%;

  img {
    background-color: #fff;
  }

  > div {
    display: flex;
  }

  .centralizer {
    display: flex;
    justify-content: center;
    align-itens: center;
  }
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  min-height: 167px;

  h4 {
    text-transform: uppercase;
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    line-height: 22px;
  }

  ul {
    list-style: none;

    li {
      text-transform: uppercase;
      margin-bottom: 16px;
      cursor: pointer;
      text-align: center;
    }

    a {
      text-decoration: none;
      color: ${colors.gray};
      transition: color 0.4s;

      &:hover {
        color: ${colors.white};
      }
    }
  }

  .social-media {
    min-height: 167px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      text-transform: uppercase;
      margin-bottom: 4px;
    }
  }

  span {
    color: ${colors.purple};
    margin-right: 4px;
  }

  .social-box {
    display: flex;
    flex-direction: row;
    text-align: center;
    font-size: 12px;
    margin-bottom: 8px;

    p {
      cursor: pointer;
      text-transform: lowercase;
      letter-spacing: 1px;
    }

    img {
      max-width: 32px;
      margin-right: 8px;
      border: 1px solid white;
      border-radius: 4px;
      cursor: pointer;
    }
  }
`

export const FooterRights = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  background-color: #111;
  color: ${colors.gray};

  p {
    text-transform: uppercase;
    font-size: 12px;
  }
`
