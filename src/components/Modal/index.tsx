import { ModalContainer, ModalContent } from './styles'
import closeImg from '../../assets/images/icons/close.png'
import kawasaki1 from '../../assets/images/kawasaki/kawasaki1.jpg'

interface ModalProps {
  openModal: (url: string) => void
  closeModal: () => void
  imgUrl: string
}

const Modal: React.FC<ModalProps> = ({ closeModal, imgUrl }) => {
  return (
    <ModalContainer className={imgUrl ? 'is-visible' : ''}>
      <ModalContent>
        <header>
          <img src={closeImg} alt="ícone de fechar" onClick={closeModal} />
        </header>
        <img src={imgUrl} />
      </ModalContent>
      <div className="overlay" onClick={closeModal} />
    </ModalContainer>
  )
}

export default Modal
