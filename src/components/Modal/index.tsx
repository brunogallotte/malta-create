import { AnimatePresence, motion } from 'framer-motion'
import { ModalContainer, ModalContent } from './styles'
import closeImg from '../../assets/images/icons/close.png'
import arrowLeft from '../../assets/images/icons/angle-left.svg'
import arrowRight from '../../assets/images/icons/angle-right.svg'
import { useEffect, useState } from 'react'
import { Photo, photos } from '../../data/photoData'
import { useLocation } from 'react-router-dom'

interface ModalProps {
  openModal: (url: string, layoutId: string, imgId: number) => void
  closeModal: () => void
  imgUrl: string
  layoutId: string
  imgId?: number
  kawasakiPhotos?: Photo[]
}

const dataPhotos: Photo[] = photos.map(function (photo) {
  return photo
})

const Modal: React.FC<ModalProps> = ({ closeModal, imgUrl, layoutId }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentCategory, setCurrentCategory] = useState<any>({
    category: '',
    len: 0
  })
  const location = useLocation()

  useEffect(() => {
    const newIndex = dataPhotos.findIndex((photo) => photo.url === imgUrl)
    setCurrentIndex(newIndex >= 0 ? newIndex : 0)
  }, [imgUrl])

  useEffect(() => {
    const category = dataPhotos[currentIndex].category
    const newCategory = category ? category.toString().toLowerCase() : ''
    const categoryLen = dataPhotos.filter(
      (photo) => photo.category === category
    )
    setCurrentCategory({ category: newCategory, len: categoryLen.length })
  }, [currentIndex])

  const handleNext = () => {
    const newIndex = currentIndex + 1

    const pathName = location.pathname.split('/')
    const pathNameSegment = pathName[2]

    console.log(newIndex)
    // para o powerpeak, o currentCategory.len esta dando menor

    const dataPhotoArrayCategory = dataPhotos.filter(
      (photo) => photo.category?.toLowerCase() === pathNameSegment
    )

    if (
      pathNameSegment === currentCategory.category &&
      newIndex < dataPhotoArrayCategory[dataPhotoArrayCategory.length - 1].id
    ) {
      setCurrentIndex(newIndex)
    }
  }

  const handlePrevious = () => {
    const newIndex = currentIndex - 1

    const pathName = location.pathname.split('/')
    const pathNameSegment = pathName[2]

    const dataPhotoArrayCategory = dataPhotos.filter(
      (photo) => photo.category?.toLowerCase() === pathNameSegment
    )
    const categoryFirstId = dataPhotoArrayCategory[0].id

    // continuar logica do first id

    if (
      pathNameSegment === currentCategory.category &&
      newIndex >= 0 &&
      newIndex > categoryFirstId - 2
    ) {
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
                src={dataPhotos[currentIndex].url}
                layoutId={layoutId}
              />
              <motion.div
                className="box-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <img
                  onClick={handlePrevious}
                  className="button"
                  src={arrowLeft}
                />
                <img onClick={handleNext} className="button" src={arrowRight} />
              </motion.div>
            </ModalContent>
            <div className="overlay" onClick={closeModal} />
          </ModalContainer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal