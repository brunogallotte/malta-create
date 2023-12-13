import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const GalleryContent = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr;
    width: 90%;
    padding-bottom: 32px;
    margin: 0 auto;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .photo {
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .content {
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
      color: ${colors.white};
      opacity: 0;
      transition: 0.6s;
      cursor: pointer;

      h3 {
        color: ${colors.gray};
      }
    }

    .content:hover {
      opacity: 1;
      backdrop-filter: blur(1px);
    }
  }
`

export const GalleryItem = styled.div`
  .column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
