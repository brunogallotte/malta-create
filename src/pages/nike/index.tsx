import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { Photo, photos } from '../../data/photoData'
import { GalleryProject } from './styles'
import photo from '../../assets/images/nike/nike6.jpg'
import Modal from '../../components/Modal'
import { useState } from 'react'
import ButtonTop from '../../components/BtnTop'

const nikePhotos: Photo[] = photos.filter(function (photo) {
  return photo.category === 'Nike'
})

export const Nike = () => {
  const [modal, setModal] = useState({ isVisible: false, url: '' })

  const openModal = (url: string) => {
    setModal({ isVisible: true, url })
  }

  const closeModal = () => {
    setModal({ isVisible: false, url: '' })
  }

  return (
    <>
      <Header />
      <Hero
        title="Nike"
        description="lifestyle sports photography"
        backgroundImage={photo}
      />
      <GalleryProject>
        {nikePhotos.map(function (photo) {
          return (
            <div key={photo.id}>
              <img
                src={photo.url}
                onClick={() => {
                  if (photo.url) {
                    openModal(photo.url)
                  }
                }}
              />
            </div>
          )
        })}
      </GalleryProject>
      <Footer />
      <Modal openModal={openModal} closeModal={closeModal} imgUrl={modal.url} />
      <ButtonTop />
    </>
  )
}
