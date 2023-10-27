import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { Photo, photos } from '../../data/photoData'
import { GalleryProject } from './styles'
import photo from '../../assets/images/nike/nike6.jpg'

const nikePhotos: Photo[] = photos.filter(function (photo) {
  return photo.category === 'Nike'
})

export const Nike = () => {
  return (
    <>
      <Header />
      <Hero
        title="Nike"
        description="lifestyle sports photography"
        backgroundImage={photo}
      />
      <GalleryProject>
        {nikePhotos.map(function (photo) {
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
