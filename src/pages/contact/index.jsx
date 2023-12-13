import { useEffect } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'

import {
  AboutContent,
  AboutSection,
  BoxButton,
  BoxSocial,
  ClientContent,
  ContactContent,
  ContactSection,
  ContactText,
  FormControl,
  Input,
  ProfileBox,
  TextBox
} from './styles'

import { motion } from 'framer-motion'

import byd from '../../assets/images/logos-clientes/byd.jpg'
import dinners from '../../assets/images/logos-clientes/dinners.webp'
import nissan from '../../assets/images/logos-clientes/nissan.png'
import randolph from '../../assets/images/logos-clientes/randolph.webp'
import oliver from '../../assets/images/logos-clientes/oliver.webp'
import cartago from '../../assets/images/logos-clientes/cartago.webp'
import raphaelImg from '../../assets/images/raphael.webp'
import SocialCard from '../../components/SocialCard'
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
            <TextBox
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2>about me</h2>
              <div className="underline" />
              <motion.p
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
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
                <strong>
                  hello@raphaelmalta.com
                  <motion.div
                    className="sublime"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                  />
                </strong>
              </motion.p>
              <BoxSocial
                as={motion.div}
                initial={{ x: 40 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <SocialCard />
              </BoxSocial>
            </TextBox>
            <ProfileBox
              as={motion.div}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
            >
              <img src={raphaelImg} />
              <h3>Raphael Malta</h3>
              <span>/photographer</span>
            </ProfileBox>
            <motion.span
              className="blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            />
          </AboutContent>
        </div>
      </AboutSection>
      <ContactSection
        as={motion.section}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
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
        <span className="pattern" />
      </ContactSection>
      <Footer />
    </>
  )
}

export default Contact
