import { HeroContent, HeroSection, Overlay } from './styles'

type Props = {
  title: string
  description: string
}

const Hero = ({ title, description }: Props) => (
  <HeroSection>
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
