import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Hero from '../../../components/Hero'
import { Photo, photos } from '../../../data/photoData'
import { GalleryProject } from '../nike/styles'
import photo from '../../../assets/images/kawasaki/kawasaki8.jpg'
import Modal from '../../../components/Modal'
import { useState } from 'react'
import ButtonTop from '../../../components/BtnTop'

const kawasakiPhotos: Photo[] = photos.filter(function (photo) {
  return photo.category === 'Kawasaki'
})

export const Kawasaki = () => {
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
        title="Kawasaki"
        description="automotive photography"
        backgroundImage={photo}
      />
      <GalleryProject>
        {kawasakiPhotos.map(function (photo) {
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
