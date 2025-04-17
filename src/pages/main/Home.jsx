import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import HeroSection from '../../components/Hero/HeroSection'
import AboutSection from '../../components/Hero/AboutSection'
import FeaturesSection from '../../components/features/FeaturesSection'
import TestimonialSection from '../../components/features/TestimonialSection'
import FAQSection from '../../components/features/FAQSection'
import ClientsSection from '../../components/features/ClientsSection'

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialSection />
      <ClientsSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default Home
