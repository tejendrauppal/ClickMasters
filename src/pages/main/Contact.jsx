import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import ContactHeroSection from '../../components/contact/ContactHeroSection'
import ContactFormSection from '../../components/contact/ContactFormSection'
import ContactMapSection from '../../components/contact/ContactMapSection'
import NewsletterSection from '../../components/layout/NewsletterSection'
import WhyReachOutSection from '../../components/contact/WhyReachOutSection'

function Contact() {
  return (
    <div>
      <Navbar />
      <ContactHeroSection />
      <WhyReachOutSection />
      <ContactFormSection />
      <ContactMapSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}

export default Contact;
