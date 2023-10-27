import styled from 'styled-components'
import photo from '../../assets/images/nike/nike6.jpg'
import { colors } from '../../styles'

export const HeroSection = styled.section<{ backgroundImage: string }>`
  height: 350px;
  margin-bottom: 8px;
  position: relative;

  .image {
    height: 100%;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center 90%;
  }
`

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${colors.white};
  min-height: 100%;
  position: relative;
  z-index: 1;
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;
  cursor: pointer;
`
