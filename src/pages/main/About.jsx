import React, { useRef } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import AboutIntroSection from '../../components/about/AboutIntroSection';
import OurStorySection from '../../components/about/OurStorySection';
import HowItWorksSection from '../../components/about/HowItWorksSection';
import TeamSection from '../../components/about/TeamSection';
import WhyChooseUsSection from '../../components/about/WhyChooseUsSection';
import EventGallerySection from '../../components/about/EventGallerySection';
import NewsletterSection from '../../components/layout/NewsletterSection';

function About() {
  const teamRef = useRef();

  const scrollToTeam = () => {
    teamRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="bg-black text-white">
      <Navbar />
      <AboutIntroSection onMeetTeamClick={scrollToTeam} />
      <OurStorySection />
      <EventGallerySection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TeamSection ref={teamRef} />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default About;