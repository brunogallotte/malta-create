import styled from 'styled-components'
import { breakpoints, colors, fontSize } from '../../styles'

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
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 0px;
  }

  strong {
    position: relative;
  }

  .sublime {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    width: 100%;
    height: 3px;
    background-color: ${colors.purple};
  }

  .blur {
    position: absolute;
    box-shadow: 0 0 1000px 100px #2e1065;
    z-index: 0;
  }
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  z-index: 1;

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
    font-size: ${fontSize.medium};
  }

  span {
    font-size: ${fontSize.small};
    color: #ccc;
    opacity: 0.4;
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
  position: relative;
  padding: 64px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding: 0px;
  }

  .pattern {
    z-index: 0;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    --color: #e1e1e1;
    background-color: #f3f3f3;
    background-image: linear-gradient(
        0deg,
        transparent 24%,
        var(--color) 25%,
        var(--color) 26%,
        transparent 27%,
        transparent 74%,
        var(--color) 75%,
        var(--color) 76%,
        transparent 77%,
        transparent
      ),
      linear-gradient(
        90deg,
        transparent 24%,
        var(--color) 25%,
        var(--color) 26%,
        transparent 27%,
        transparent 74%,
        var(--color) 75%,
        var(--color) 76%,
        transparent 77%,
        transparent
      );
    background-size: 55px 55px;
    opacity: 0.5;
  }
`

export const ContactContent = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 32px;

  @media (max-width: ${breakpoints.laptop}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 64px;
  }
`

export const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  z-index: 1;

  @media (max-width: ${breakpoints.laptop}) {
    padding: 32px;
    width: 100%;
    margin-top: 32px;
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
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  z-index: 1;

  @media (max-width: ${breakpoints.laptop}) {
    width: 100%;
  }

  .box-input {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }
  }

  textarea {
    width: 100%;
    height: 200px;
    padding: 16px;
    font-size: 16px;
    margin: 6px;
    border-radius: 4px;
    border: 1px solid #3f3f46;
    background-color: #27272a;
    color: #d1d5db;
    resize: none;

    &:focus {
      outline: none;
      border: 1px solid #71717a;
    }
  }

  h3 {
    color: #fff;
    font-size: ${fontSize.medium};
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 16px;
  }

  .icon {
    width: 24px;
    height: 24px;
    color: #fff;
  }
`

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 16px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: 1px solid #3f3f46;
  background-color: #27272a;
  color: #d1d5db;

  &:focus {
    outline: none;
    border: 1px solid #71717a;
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
