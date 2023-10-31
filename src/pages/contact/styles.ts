import styled from 'styled-components'

export const AboutSection = styled.section`
  display: flex;
  max-width: 850px;

  h2 {
    text-align: center;
    text-transform: uppercase;
  }

  p {
    margin-top: 16px;
    margin-left: 16px;
    line-height: 22px;
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
