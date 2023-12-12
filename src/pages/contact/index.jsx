import { useEffect } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

import {
  AboutContent,
  AboutSection,
  BoxButton,
  BoxSocial,
  ClientContent,
  ClientsSection,
  ClientsText,
  ContactContent,
  ContactSection,
  ContactText,
  FormControl,
  Input,
  ProfileBox,
  TextBox
} from './styles'

import byd from '../../assets/images/logos-clientes/byd.jpg'
import dinners from '../../assets/images/logos-clientes/dinners.webp'
import nissan from '../../assets/images/logos-clientes/nissan.png'
import randolph from '../../assets/images/logos-clientes/randolph.webp'
import oliver from '../../assets/images/logos-clientes/oliver.webp'
import cartago from '../../assets/images/logos-clientes/cartago.webp'
import raphaelImg from '../../assets/images/raphael.webp'
import instaImg from '../../assets/images/icons/instagram.svg'
import linkedinImg from '../../assets/images/icons/linkedin.svg'
import behanceImg from '../../assets/images/icons/behance.svg'
import SocialCard from '../../components/SocialCard'
import kawasaki from '../../assets/images/kawasaki/kawasaki5.jpg'
import nike from '../../assets/images/nike/nike4.jpg'
import Button from '../../components/Button'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <AboutSection>
        <div className="container">
          <AboutContent>
            <TextBox>
              <h2>about me</h2>
              <div className="underline" />
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
                project! :) <br /> <br /> Contact info:{' '}
                <b>hello@raphaelmalta.com</b>
              </p>
              <BoxSocial>
                <SocialCard />
              </BoxSocial>
            </TextBox>
            <ProfileBox>
              <img src={raphaelImg} />
              <h3>Raphael Malta</h3>
              <span>/photographer</span>
            </ProfileBox>
          </AboutContent>
        </div>
      </AboutSection>
      <ContactSection>
        <div className="container">
          <ContactContent>
            <FormControl>
              <h3>send me a message</h3>
              <div className="box-input">
                <Input type="text" placeholder="name" />
                <Input type="text" placeholder="last name" />
              </div>
              <Input type="email" placeholder="e-mail" />
              <textarea type="textarea" placeholder="your text" />
              <BoxButton>
                <Button />
              </BoxButton>
            </FormControl>
            <ContactText>
              <h2>clients</h2>
              <div className="underline" />
              <ClientContent>
                <img src={byd} />
                <img src={dinners} />
                <img src={nissan} />
                <img src={randolph} />
                <img src={oliver} />
                <img src={cartago} />
              </ClientContent>
            </ContactText>
          </ContactContent>
        </div>
      </ContactSection>
      <Footer />
    </>
  )
}

export default Contact
