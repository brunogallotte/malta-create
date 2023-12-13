import { GalleryContent } from './styles'
import { useNavigate } from 'react-router-dom'

import vulcan1 from '../../assets/images/kawasaki/kawasaki1.png'
import vulcan4 from '../../assets/images/kawasaki/kawasaki4.png'
import vulcan5 from '../../assets/images/kawasaki/kawasaki5.png'
import vulcan7 from '../../assets/images/kawasaki/kawasaki7.png'
import nike1 from '../../assets/images/nike/nike1.png'
import nike2 from '../../assets/images/nike/nike2.png'
import nike4 from '../../assets/images/nike/nike4.png'
import nike6 from '../../assets/images/nike/nike6.png'
import nike22 from '../../assets/images/nike/nike22.png'
import power1 from '../../assets/images/powerpeak/powerpeak1.png'
import power7 from '../../assets/images/powerpeak/powerpeak7.png'
import power8 from '../../assets/images/powerpeak/powerpeak8.png'
import power11 from '../../assets/images/powerpeak/powerpeak11.png'
import power13 from '../../assets/images/powerpeak/powerpeak13.png'
import ButtonTop from '../BtnTop'
import { motion } from 'framer-motion'

const Gallery = () => {
  const navigate = useNavigate()

  return (
    <>
      <GalleryContent
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 2 }}
        exit={{ opacity: 0 }}
      >
        <div className="column">
          <div
            className="photo"
            onClick={() => navigate('/categories/kawasaki')}
          >
            <div className="content">
              <h3>Kawasaki</h3>
              <p>View project</p>
            </div>
            <img src={vulcan1} />
          </div>
          <div className="photo" onClick={() => navigate('/categories/nike')}>
            <div className="content">
              <h3>Nike</h3>
              <p>View project</p>
            </div>
            <img src={nike4} />
          </div>
          <div className="photo" onClick={() => navigate('/categories/nike')}>
            <div className="content">
              <h3>Nike</h3>
              <p>View project</p>
            </div>
            <img src={nike6} />
          </div>
          <div
            className="photo"
            onClick={() => navigate('/categories/powerpeak')}
          >
            <div className="content">
              <h3>Power Peak</h3>
              <p>View project</p>
            </div>
            <img src={power1} />
          </div>
          <div
            className="photo"
            onClick={() => navigate('/categories/powerpeak')}
          >
            <div className="content">
              <h3>Power Peak</h3>
              <p>View project</p>
            </div>
            <img src={power7} />
          </div>
        </div>
        <div className="column">
          <div
            className="photo"
            onClick={() => navigate('/categories/kawasaki')}
          >
            <div className="content">
              <h3>Kawasaki</h3>
              <p>View project</p>
            </div>
            <img src={vulcan4} />
          </div>
          <div
            className="photo"
            onClick={() => navigate('/categories/kawasaki')}
          >
            <div className="content">
              <h3>Kawasaki</h3>
              <p>View project</p>
            </div>
            <img src={vulcan5} />
          </div>
          <div className="photo" onClick={() => navigate('/categories/nike')}>
            <div className="content">
              <h3>Nike</h3>
              <p>View project</p>
            </div>
            <img src={nike1} />
          </div>
          <div className="photo" onClick={() => navigate('/categories/nike')}>
            <div className="content">
              <h3>Nike</h3>
              <p>View project</p>
            </div>
            <img src={nike22} />
          </div>
          <div
            className="photo"
            onClick={() => navigate('/categories/powerpeak')}
          >
            <div className="content">
              <h3>Power Peak</h3>
              <p>View project</p>
            </div>
            <img src={power13} />
          </div>
          <div
            className="photo"
            onClick={() => navigate('/categories/powerpeak')}
          >
            <div className="content">
              <h3>Power Peak</h3>
              <p>View project</p>
            </div>
            <img src={power8} />
          </div>
        </div>
        <div className="column">
          <div
            className="photo"
            onClick={() => navigate('/categories/kawasaki')}
          >
            <div className="content">
              <h3>Kawasaki</h3>
              <p>View project</p>
            </div>
            <img src={vulcan7} />
          </div>
          <div className="photo" onClick={() => navigate('/categories/nike')}>
            <div className="content">
              <h3>Nike</h3>
              <p>View project</p>
            </div>
            <img src={nike2} />
          </div>
          <div
            className="photo"
            onClick={() => navigate('/categories/powerpeak')}
          >
            <div className="content">
              <h3>Power Peak</h3>
              <p>View project</p>
            </div>
            <img src={power11} />
          </div>
        </div>
      </GalleryContent>
      <ButtonTop />
    </>
  )
}

export default Gallery
