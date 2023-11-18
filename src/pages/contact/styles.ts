import styled from 'styled-components'
import { colors } from '../../styles'

export const AboutSection = styled.section`
  display: flex;
  min-height: 350px;
  background-color: ${colors.black};
  color: ${colors.white};
  padding-top: 32px;
  padding-bottom: 32px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    text-align: center;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 4px;
    z-index: 1;
  }

  p {
    margin-top: 16px;
    line-height: 22px;
    mix-blend-mode: exclusion;
    z-index: 1;
    margin-bottom: 16px;
  }

  .underline {
    width: 160px;
    height: 8px;
    background-color: ${colors.purple};
    margin-top: -10px;
  }
`

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
`

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 200px;
  margin-left: 32px;

  h3 {
    margin-top: 8px;
  }

  span {
    margin-top: 4px;
    color: #ccc;
    font-size: 14px;
  }
`

export const BoxSocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  alig-items: center;
  width: 100%;
  margin-top: 8px;

  img {
    width: 24px;
    background-color: #fff;
    margin-right: 4px;
    opacity: 0.7;
    transition: opacity 0.4s;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`

export const ClientsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 64px;

  h3 {
    font-size: 24px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 32px;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 128px;

    img {
      width: 128px;
    }
  }
`
