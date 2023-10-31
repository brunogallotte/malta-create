import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Hero from '../../../components/Hero'
import photo from '../../../assets/images/powerpeak/powerpeak4.jpg'
import { GalleryProject } from '../nike/styles'
import { Photo, photos } from '../../../data/photoData'
import { useState } from 'react'
import Modal from '../../../components/Modal'
import ButtonTop from '../../../components/BtnTop'
import { ModuleDetectionKind } from 'typescript'
import { motion } from 'framer-motion'

const powerpeakPhotos: Photo[] = photos.filter(function (photo) {
  return photo.category === 'PowerPeak'
})

const PowerPeak = () => {
  const [modal, setModal] = useState({
    isVisible: false,
    url: '',
    layoutId: ''
  })

  const openModal = (url: string, layoutId: string) => {
    setModal({ isVisible: true, url, layoutId })
    console.log(layoutId)
  }

  const closeModal = () => {
    setModal({ isVisible: false, url: '', layoutId: '' })
  }

  return (
    <>
      <Header />
      <Hero
        title="Power Peak"
        description="empower your life"
        backgroundImage={photo}
      />
      <GalleryProject
        as={motion.div}
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: 'tween',
          ease: 'anticipate',
          duration: 2,
          flip: Infinity
        }}
      >
        {powerpeakPhotos.map((photo) => (
          <div key={photo.id}>
            <motion.img
              layoutId={`image${photo.id}`}
              initial={{ scale: 0.6 }}
              animate={{ scale: 0.9 }}
              exit={{ scale: 1 }}
              transition={{
                // type: 'spring',
                // stifness: 100,
                // mass: 1,
                // damping: 10,
                duration: 0.4
              }}
              whileHover={{
                scale: 1,
                transition: {
                  duration: 1.5
                }
              }}
              src={photo.url}
              onClick={() => {
                if (photo.url) {
                  openModal(photo.url, `image${photo.id}`)
                }
              }}
            />
          </div>
        ))}
      </GalleryProject>
      <Footer />
      <Modal
        layoutId={modal.layoutId}
        openModal={openModal}
        closeModal={closeModal}
        imgUrl={modal.url}
      />
      <ButtonTop />
    </>
  )
}

export default PowerPeak
