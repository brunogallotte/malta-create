import { AnimatePresence, motion } from 'framer-motion'
import { ModalContainer, ModalContent } from './styles'
import closeImg from '../../assets/images/icons/close.png'
import { useState } from 'react'

interface ModalProps {
  openModal: (url: string, layoutId: string) => void
  closeModal: () => void
  imgUrl: string
  layoutId: string
}

const Modal: React.FC<ModalProps> = ({ closeModal, imgUrl, layoutId }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>()
  
  const showPreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  }

  const showNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex < kawasakiPhotos.length - 1 ? prevIndex + 1 : prevIndex
    )
  }

  return (
    <AnimatePresence>
      {imgUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalContainer className={imgUrl ? 'is-visible' : ''}>
            <ModalContent>
              <header>
                <img
                  src={closeImg}
                  alt="ícone de fechar"
                  onClick={closeModal}
                />
              </header>
              <motion.img src={imgUrl} layoutId={layoutId} />
              <div>
                <button>Anterior</button>
                <button>Próxima</button>
              </div>
            </ModalContent>
            <div className="overlay" onClick={closeModal} />
          </ModalContainer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
