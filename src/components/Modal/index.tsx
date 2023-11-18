import { AnimatePresence, motion } from 'framer-motion'
import { ModalContainer, ModalContent } from './styles'
import closeImg from '../../assets/images/icons/close.png'
import arrowLeft from '../../assets/images/icons/angle-left.svg'
import arrowRight from '../../assets/images/icons/angle-right.svg'
import { useEffect, useRef, useState } from 'react'
import { Photo, photos } from '../../data/photoData'
import { useLocation } from 'react-router-dom'
import { debounce } from 'lodash'

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
  const imageRef = useRef<HTMLImageElement | null>(null)

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

    if (
      pathNameSegment === currentCategory.category &&
      newIndex >= 0 &&
      newIndex > categoryFirstId - 2
    ) {
      setCurrentIndex(newIndex)
    }
  }

  //Lógica para avançar fotos nas setas do teclado

  useEffect(() => {
    // Defina o foco na imagem quando o componente for montado ou currentIndex for atualizado
    if (imageRef.current) {
      imageRef.current.focus()
      console.log('foco atualizado')
    }
  }, [currentIndex])

  const handleKeyVerification = debounce((event: any) => {
    if (imageRef.current && imgUrl) {
      imageRef.current.focus()
    }

    if (event.key === 'ArrowRight') {
      handleNext()
    } else if (event.key === 'ArrowLeft') {
      handlePrevious()
    }
  }, 300) // 500 milissegundos é o tempo de espera antes da próxima chamada

  useEffect(() => {
    window.addEventListener('keydown', handleKeyVerification)

    return () => {
      window.removeEventListener('keydown', handleKeyVerification)
    }
  }, [imgUrl, currentIndex])

  return (
    <AnimatePresence>
      {imgUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          tabIndex={0}
          onKeyDown={handleKeyVerification}
        >
          <ModalContainer className={imgUrl ? 'is-visible' : ''}>
            <div className="teste">
              <img onClick={closeModal} className="close-icon" src={closeImg} />
            </div>
            <ModalContent>
              <img
                onClick={handlePrevious}
                className="button"
                src={arrowLeft}
              />
              <motion.img
                src={dataPhotos[currentIndex].url}
                layoutId={layoutId}
                ref={imageRef}
                tabIndex={-1}
                className="modalImage"
              />
              <img onClick={handleNext} className="button" src={arrowRight} />
            </ModalContent>
            <div className="overlay" onClick={closeModal} />
          </ModalContainer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
