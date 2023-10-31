import styled from 'styled-components'
import { colors } from '../../styles'

export const BtnTop = styled.div`
  position: fixed;
  bottom: 35px;
  right: 35px;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .arrow {
    border: solid ${colors.white};
    border-width: 0 7px 7px 0;
    padding: 4px;
    display: inline-block;
  }

  .up {
    transform: rotate(-135deg);
  }
`
