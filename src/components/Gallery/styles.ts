import styled from 'styled-components'

export const GalleryContent = styled.div`
  display: flex;
  gap: 20px;

  .column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
