import styled from 'styled-components'
import { breakpoints, colors, fontSize } from '../../styles'

export const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  background-color: ${colors.black};
  color: ${colors.gray};
  width: 100%;
  border-top: 2px solid #e4e4e7;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }

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

  h4 {
    text-transform: uppercase;
    font-size: ${fontSize.medium};
    color: ${colors.white};
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
      color: ${colors.white};
      transition: color 0.4s;
    }
  }

  .social-media {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      text-transform: uppercase;
      color: ${colors.white};
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
    margin-bottom: 16px;

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

  .separator {
    height: 100%;
    width: 1px;
    background-color: #e4e4e7;
    opacity: 0.3;
    box-shadow: 0 0 1000px 100px rgba(82, 82, 91, 0.7);

    @media (max-width: ${breakpoints.tablet}) {
      display: none;
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

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 32px;
  }

  p {
    text-transform: uppercase;
    font-size: 12px;
  }
`
