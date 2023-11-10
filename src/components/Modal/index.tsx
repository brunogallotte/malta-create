import { AnimatePresence, motion } from 'framer-motion'
import { BoxButton, ModalContainer, ModalContent } from './styles'
import closeImg from '../../assets/images/icons/close.png'
import { useEffect, useState } from 'react'
import { Photo, photos } from '../../data/photoData'

interface ModalProps {
  openModal: (url: string, layoutId: string, imgId: number) => void
  closeModal: () => void
  imgUrl: string
  layoutId: string
  imgId?: number
  kawasakiPhotos?: Photo[]
}

//Importei a galeria para fazer os teste, pensei em talvez fazer um estado de contador que perpassa pelo index e acessa a url
//Ou criar um state que compara da um find no img url que veio pelo openModal, e assim podemos encontrar o objeto e manipular
const kawasakiPhotos: Photo[] = photos.filter(function (photo) {
  return photo.category === 'Kawasaki'
})

const Modal: React.FC<ModalProps> = ({ closeModal, imgUrl, layoutId }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    const newIndex = kawasakiPhotos.findIndex((photo) => photo.url === imgUrl)
    setCurrentIndex(newIndex >= 0 ? newIndex : 0)
  }, [imgUrl])

  const handleNext = () => {
    const newIndex = currentIndex + 1
    if (newIndex < kawasakiPhotos.length) {
      setCurrentIndex(newIndex)
    }
  }

  const handlePrevious = () => {
    const newIndex = currentIndex - 1
    if (newIndex > 0) {
      setCurrentIndex(newIndex)
    }
  }
  //Se o imgUrl estiver vazio carrega o link direto para evitar lag

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
              <motion.img
                src={kawasakiPhotos[currentIndex].url}
                layoutId={layoutId}
              />
            </ModalContent>
            <div className="overlay" onClick={closeModal} />
            <BoxButton>
              <button type="button" onClick={handlePrevious}>
                Anterior
              </button>
              <button type="button" onClick={handleNext}>
                Próxima
              </button>
            </BoxButton>
          </ModalContainer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
