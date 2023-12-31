import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Hero from '../../../components/Hero'
import photo from '../../../assets/images/powerpeak/powerpeak4.png'
import { GalleryProject } from '../nike/styles'
import { Photo, photos } from '../../../data/photoData'
import { useEffect, useState } from 'react'
import Modal from '../../../components/Modal'
import ButtonTop from '../../../components/BtnTop'
import { motion } from 'framer-motion'

const powerpeakPhotos: Photo[] = photos.filter(function (photo) {
  return photo.category === 'PowerPeak'
})

const PowerPeak = () => {
  const [modal, setModal] = useState({
    isVisible: false,
    url: '',
    layoutId: '',
    photoId: 0
  })

  const openModal = (url: string, layoutId: string, photoId: number) => {
    setModal({ isVisible: true, url, layoutId, photoId })
  }

  const closeModal = () => {
    setModal({ isVisible: false, url: '', layoutId: '', photoId: 0 })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
          delay: 0.2,
          flip: Infinity
        }}
      >
        {powerpeakPhotos.map((photo) => (
          <div key={photo.id}>
            <motion.img
              layoutId={`image${photo.id}`}
              initial={{ y: 200, scale: 1 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ scale: 1 }}
              transition={{
                // type: 'spring',
                // stifness: 100,
                // mass: 1,
                // damping: 10,
                delay: 1,
                duration: 0.4
              }}
              whileHover={{
                scale: 1.01,
                transition: {
                  duration: 0.7
                }
              }}
              src={photo.url}
              onClick={() => {
                if (photo.url) {
                  openModal(photo.url, `image${photo.id}`, photo.id)
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
