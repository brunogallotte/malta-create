import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { Photo, photos } from '../../data/photoData'
import { GalleryProject } from './styles'

const nikePhotos: Photo[] = photos.filter(function (photo) {
  return photo.category === 'Nike'
})

export const Nike = (NikePhotos: Photo) => {
  return (
    <>
      <Header />
      <Hero title="Nike" description="lifestyle sports photography" />
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
