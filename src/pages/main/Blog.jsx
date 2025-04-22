import React from 'react'
import Navbar from '../../components/layout/Navbar'
import BlogHeroSection from '../../components/blog/BlogHeroSection'
import FeaturedBlogPost from '../../components/blog/FeaturedBlogPost'
import RecentBlogPosts from '../../components/blog/RecentBlogPosts'
import Footer from '../../components/layout/Footer'
import BlogCategories from '../../components/blog/BlogCategories'
import SubscribeSection from '../../components/blog/SubscribeSection'
import AuthorSpotlight from '../../components/blog/AuthorSpotlight'
import CallToActionContributor from '../../components/blog/CallToActionContributor'

function Blog() {
  return (
    <div>
      <Navbar />
      <BlogHeroSection />
      <FeaturedBlogPost />
      <RecentBlogPosts />
      <BlogCategories />
      <SubscribeSection />
      <AuthorSpotlight />
      <CallToActionContributor />
      <Footer />
    </div>
  )
}

export default Blog
