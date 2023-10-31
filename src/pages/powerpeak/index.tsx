import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import photo from '../../assets/images/powerpeak/powerpeak4.jpg'
import { GalleryProject } from '../nike/styles'
import { Photo, photos } from '../../data/photoData'
import { useState } from 'react'
import Modal from '../../components/Modal'
import ButtonTop from '../../components/BtnTop'

const powerpeakPhotos: Photo[] = photos.filter(function (photo) {
  return photo.category === 'PowerPeak'
})

const PowerPeak = () => {
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
        title="Power Peak"
        description="empower your life"
        backgroundImage={photo}
      />
      <GalleryProject>
        {powerpeakPhotos.map((photo) => (
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
        ))}
      </GalleryProject>
      <Footer />
      <Modal openModal={openModal} closeModal={closeModal} imgUrl={modal.url} />
      <ButtonTop />
    </>
  )
}

export default PowerPeak
