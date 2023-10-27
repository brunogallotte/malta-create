import { HeroContent, HeroSection, Overlay } from './styles'

type Props = {
  title: string
  description: string
  backgroundImage: string
}

const Hero = ({ title, description, backgroundImage }: Props) => (
  <HeroSection backgroundImage={backgroundImage}>
    <Overlay />
    <div className="image">
      <HeroContent>
        <h2>{title}</h2>
        <p>{description}</p>
      </HeroContent>
    </div>
  </HeroSection>
)

export default Hero
