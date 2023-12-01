import styled from 'styled-components'
import { breakpoints } from '../../../styles'

export const GalleryProject = styled.div`
  column-count: 3;
  column-gap: 8px;

  @media (max-width: ${breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr;
    width: 90%;
    margin: 0 auto;
  }

  img {
    width: 100%;
    margin-bottom: 4px;
    cursor: pointer;
    transition: filter 1s;

    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: 16px;
    }
  }
`
