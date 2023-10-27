import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import photo from '../../assets/images/powerpeak/powerpeak4.jpg'
import { GalleryProject } from '../nike/styles'
import { Photo, photos } from '../../data/photoData'

const powerpeakPhotos: Photo[] = photos.filter(function (photo) {
  return photo.category === 'PowerPeak'
})

const PowerPeak = () => {
  return (
    <>
      <Header />
      <Hero
        title="Power Peak"
        description="empower your life"
        backgroundImage={photo}
      />
      <GalleryProject>
        {powerpeakPhotos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.url} />
          </div>
        ))}
      </GalleryProject>
      <Footer />
    </>
  )
}

export default PowerPeak
