import Footer from '../../components/Footer'
import Header from '../../components/Header'

import {
  AboutContent,
  AboutSection,
  BoxSocialIcons,
  ClientsSection,
  ProfileBox
} from './styles'

import cocaImg from '../../assets/images/logos-clientes/cocacola.webp'
import dinnersImg from '../../assets/images/logos-clientes/dinnersclub.webp'
import motorolaImg from '../../assets/images/logos-clientes/motorola.webp'
import oliverImg from '../../assets/images/logos-clientes/oliver.webp'
import volksImg from '../../assets/images/logos-clientes/volks.webp'
import volvoImg from '../../assets/images/logos-clientes/volvo.webp'
import cartagoImg from '../../assets/images/logos-clientes/cartago.webp'
import raphaelImg from '../../assets/images/raphael.webp'
import instaImg from '../../assets/images/icons/instagram.svg'
import linkedinImg from '../../assets/images/icons/linkedin.svg'
import behanceImg from '../../assets/images/icons/behance.svg'
import SocialCard from '../../components/SocialCard'

const Contact = () => {
  return (
    <>
      <Header />
      <AboutSection>
        <div className="container">
          <div>
            <h2>about me</h2>
            <div className="underline" />
          </div>
          <AboutContent>
            <div>
              <p>
                Hey! My name is Raphael Malta and I&apos;m a Brazilian-born
                automotive & lifestyle photographer. Since I was a child
                I&apos;ve loved to take photos and it was only natural that I
                turned this hobby into a career. I&apos;ve always been amazed by
                cars, tech, sports, and nature - and I&apos;m grateful that I
                can combine a few of my passions in life and call it a job.
                I&apos;ve had the pleasure to work across the globe with some of
                the biggest brands in the world, such as Volvo, Volkswagen,
                Coca-Cola, Motorola, and others. If you want to work with me,
                just send me an email. It would be a pleasure to hear about your
                project! :) Contact info: hello@raphaelmalta.com
              </p>
              <BoxSocialIcons>
                <SocialCard />
              </BoxSocialIcons>
            </div>
            <ProfileBox>
              <img src={raphaelImg} />
              <h3>Raphael Malta</h3>
              <span>\\photographer</span>
            </ProfileBox>
          </AboutContent>
        </div>
      </AboutSection>
      <ClientsSection className="container">
        <h3>clients</h3>
        <div>
          <img src={volvoImg} alt="Logo Volvo" />
          <img src={oliverImg} alt="Logo VolksWagen" />
          <img src={motorolaImg} alt="Logo Motorola" />
          <img src={cartagoImg} alt="Logo OliverPeoples" />
          <img src={dinnersImg} alt="Logo DinnersClub" />
          <img src={cocaImg} alt="Logo Cocacola" />
          <img src={volksImg} alt="Logo Cartago" />
        </div>
      </ClientsSection>
      <Footer />
    </>
  )
}

export default Contact
