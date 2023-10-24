import { GalleryContent, GalleryItem } from './styles'
import { photos } from '../../data/photoData'

import vulcan1 from '../../assets/images/kawasaki/kawasaki1.jpg'
import vulcan2 from '../../assets/images/kawasaki/kawasaki2.jpg'
import vulcan3 from '../../assets/images/kawasaki/kawasaki3.jpg'
import vulcan4 from '../../assets/images/kawasaki/kawasaki4.jpg'
import vulcan5 from '../../assets/images/kawasaki/kawasaki5.jpg'
import vulcan6 from '../../assets/images/kawasaki/kawasaki6.jpg'
import vulcan7 from '../../assets/images/kawasaki/kawasaki7.jpg'
import vulcan8 from '../../assets/images/kawasaki/kawasaki8.jpg'
import vulcan9 from '../../assets/images/kawasaki/kawasaki9.jpg'
import nike1 from '../../assets/images/nike/nike1.jpg'
import nike2 from '../../assets/images/nike/nike2.jpg'
import nike3 from '../../assets/images/nike/nike3.jpg'
import nike4 from '../../assets/images/nike/nike4.jpg'
import nike5 from '../../assets/images/nike/nike5.jpg'
import nike6 from '../../assets/images/nike/nike6.jpg'
import nike7 from '../../assets/images/nike/nike7.jpg'
import nike8 from '../../assets/images/nike/nike8.jpg'
import nike9 from '../../assets/images/nike/nike9.jpg'
import nike22 from '../../assets/images/nike/nike22.jpg'
import power1 from '../../assets/images/powerpeak/powerpeak1.jpg'
import power6 from '../../assets/images/powerpeak/powerpeak6.jpg'
import power7 from '../../assets/images/powerpeak/powerpeak7.jpg'
import power8 from '../../assets/images/powerpeak/powerpeak8.jpg'
import power11 from '../../assets/images/powerpeak/powerpeak11.jpg'
import power13 from '../../assets/images/powerpeak/powerpeak13.jpg'

const Gallery = () => {
  return (
    <>
      <GalleryContent>
        <div className="column">
          <div className="photo">
            <img src={vulcan1} />
          </div>
          <div className="photo">
            <img src={nike4} />
          </div>
          <div className="photo">
            <img src={nike6} />
          </div>
          <div className="photo">
            <img src={power1} />
          </div>
          <div className="photo">
            <img src={power7} />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img src={vulcan4} />
          </div>
          <div className="photo">
            <img src={vulcan5} />
          </div>
          <div className="photo">
            <img src={nike1} />
          </div>
          <div className="photo">
            <img src={nike22} />
          </div>
          <div className="photo">
            <img src={power13} />
          </div>
          <div className="photo">
            <img src={power8} />
          </div>
        </div>
        <div className="column">
          <div className="photo">
            <img src={vulcan7} />
          </div>
          <div className="photo">
            <img src={nike2} />
          </div>
          <div className="photo">
            <img src={power11} />
          </div>
        </div>
      </GalleryContent>
    </>
  )
}

export default Gallery
