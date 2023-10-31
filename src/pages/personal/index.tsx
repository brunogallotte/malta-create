import Footer from '../../components/Footer'
import { GalleryContent } from '../../components/Gallery/styles'
import Header from '../../components/Header'
import nike from '../../assets/images/nike/nike3.jpg'
import kawasaki from '../../assets/images/kawasaki/kawasaki3.jpg'
import powerpeak from '../../assets/images/powerpeak/powerpeak1.jpg'
import { useNavigate } from 'react-router-dom'

const Personal = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <GalleryContent>
        <div className="column">
          <div
            className="photo"
            onClick={() => navigate('/categories/kawasaki')}
          >
            <div className="content">
              <h3>Kawasaki</h3>
              <p>View project</p>
            </div>
            <img src={kawasaki} />
          </div>
        </div>
        <div className="column">
          <div className="photo" onClick={() => navigate('/categories/nike')}>
            <div className="content">
              <h3>Nike</h3>
              <p>View project</p>
            </div>
            <img src={nike} />
          </div>
        </div>
        <div className="column">
          <div
            className="photo"
            onClick={() => navigate('/categories/powerpeak')}
          >
            <div className="content">
              <h3>Powerpeak</h3>
              <p>View project</p>
            </div>
            <img src={powerpeak} />
          </div>
        </div>
      </GalleryContent>
      <Footer />
    </>
  )
}

export default Personal
