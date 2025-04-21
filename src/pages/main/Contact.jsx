import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ContactHeroSection from '../../components/contact/ContactHeroSection'
import ContactInfoSection from '../../components/contact/ContactInfoSection'
import ContactFormSection from '../../components/contact/ContactFormSection'
import ContactMapSection from '../../components/contact/ContactMapSection'

function Contact() {
  return (
    <div>
      <Navbar />
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection />
      <ContactMapSection />
      <Footer />
    </div>
  )
}

export default Contact
