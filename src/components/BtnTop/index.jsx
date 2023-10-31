import { BtnTop } from './styles'

const goTop = () => {
  window.scrollTo(0, 0)
}

const ButtonTop = () => (
  <BtnTop className="btnTop" onClick={goTop}>
    <i className="arrow up"></i>
  </BtnTop>
)

export default ButtonTop
