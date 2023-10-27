import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { Photo, photos } from '../../data/photoData'
import { GalleryProject } from '../nike/styles'
import photo from '../../assets/images/kawasaki/kawasaki5.jpg'

const kawasakiPhotos: Photo[] = photos.filter(function (photo) {
  return photo.category === 'Kawasaki'
})

export const Kawasaki = () => {
  return (
    <>
      <Header />
      <Hero
        title="Kawasaki"
        description="automotive photography"
        backgroundImage={photo}
      />
      <GalleryProject>
        {kawasakiPhotos.map(function (photo) {
          return (
            <div key={photo.id}>
              <img src={photo.url} />
            </div>
          )
        })}
      </GalleryProject>
      <Footer />
    </>
  )
}
