import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Hero from '../../../components/Hero'
import { Photo, photos } from '../../../data/photoData'
import { GalleryProject } from '../nike/styles'
import photo from '../../../assets/images/kawasaki/kawasaki8.jpg'
import Modal from '../../../components/Modal'
import { useState } from 'react'
import ButtonTop from '../../../components/BtnTop'
import { motion } from 'framer-motion'

const kawasakiPhotos: Photo[] = photos.filter(function (photo) {
  return photo.category === 'Kawasaki'
})

export const Kawasaki = () => {
  const [modal, setModal] = useState({
    isVisible: false,
    url: '',
    layoutId: '',
    photoId: 0
  })

  const openModal = (url: string, layoutId: string, photoId: number) => {
    setModal({ isVisible: true, url, layoutId, photoId })
    console.log(photoId)
  }

  const closeModal = () => {
    setModal({ isVisible: false, url: '', layoutId: '', photoId: 0 })
  }

  return (
    <>
      <Header />
      <Hero
        title="Kawasaki"
        description="automotive photography"
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
        {kawasakiPhotos.map(function (photo) {
          return (
            <motion.div key={photo.id}>
              <motion.img
                layoutId={`image${photo.id}`}
                initial={{ scale: 0.9 }}
                animate={{ scale: 0.98 }}
                exit={{ scale: 0.7 }}
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
                    duration: 0.5
                  }
                }}
                src={photo.url}
                onClick={() => {
                  if (photo.url) {
                    openModal(photo.url, `image${photo.id}`, photo.id)
                  }
                }}
              />
            </motion.div>
          )
        })}
      </GalleryProject>
      <Footer />
      <Modal
        layoutId={modal.layoutId}
        openModal={openModal}
        closeModal={closeModal}
        imgUrl={modal.url}
        kawasakiPhotos={kawasakiPhotos}
      />
      <ButtonTop />
    </>
  )
}
