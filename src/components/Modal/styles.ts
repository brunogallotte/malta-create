import styled from 'styled-components'
import { colors } from '../../styles'

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.is-visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .teste {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1;

    .close-icon {
      width: 32px;
      margin-top: 16px;
      margin-right: 16px;
      cursor: pointer;
    }
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 1;

  .button {
    width: 128px;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg)
      brightness(100%) contrast(100%);
    opacity: 50%;
    cursor: pointer;
  }

  .modalImage {
    position: relative;
    width: 100%;
    max-height: 90vh;
    max-width: 90%;

    &:focus {
      outline: none;
    }
  }
`
