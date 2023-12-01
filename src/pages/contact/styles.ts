import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const AboutSection = styled.section`
  min-height: 350px;
  background-color: ${colors.black};
  color: ${colors.white};

  .underline {
    width: 160px;
    height: 8px;
    background-color: ${colors.purple};
    margin-top: -10px;
    z-index: 0;
  }
`

export const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 0px;
  }
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-top: 32px;
  }

  h2 {
    font-size: 32px;
    font-weight: 400;
    z-index: 1;
  }

  p {
    margin-top: 16px;
    margin-bottom: 16px;
    line-height: 22px;
  }
`

export const BoxSocial = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 16px;
    justify-content: center;
  }
`

export const ProfileBox = styled.div`
  h3 {
    margin-top: 8px;
  }

  span {
    color: #ccc;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 32px;
  }
`

export const ClientContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  grid-gap: 64px;
  margin-top: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  img {
    width: 128px;
  }
`

export const ContactSection = styled.section`
  padding: 64px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding: 0px;
  }
`

export const ContactContent = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: ${breakpoints.laptop}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 64px;
  }
`

export const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: ${breakpoints.laptop}) {
    width: 100%;
    margin-top: 64px;
  }

  h2 {
    text-transform: lowercase;
    font-size: 32px;
    z-index: 1;
  }

  .underline {
    width: 140px;
    height: 8px;
    background-color: ${colors.purple};
    margin-top: -10px;
    z-index: 0;
  }
`

export const FormControl = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: ${colors.black};
  border-radius: 8px;
  width: 50%;

  @media (max-width: ${breakpoints.laptop}) {
    width: 100%;
  }

  .box-input {
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }

    input {
      width: 100%;
    }
  }

  textarea {
    width: 100%;
    padding: 16px;
    font-size: 16px;
    margin: 6px;
    border-radius: 4px;
    border: none;
    resize: none;
    height: 200px;

    &:focus {
      outline: none;
    }
  }

  h3 {
    color: #fff;
    margin-bottom: 16px;
  }
`

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: 1 px solid #fff;

  &:focus {
    outline: none;
  }
`

export const BoxButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  padding: 16px;
  width: 100%;
  background-color: #222;
`
