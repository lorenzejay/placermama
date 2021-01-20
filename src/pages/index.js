import React from "react"
import ContactUs from "../components/contactUs"
import HomeIntro from "../components/homeIntro"
import ImageGrid from "../components/imageGrid"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonial from "../components/testimonial"

import CHomeHero from "../components/cHomeHero"

const IndexPage = () => {
  return (
    <Layout homePage={true}>
      <SEO title="Los Angeles Wedding Photography and Cinematography Studio" />
      <CHomeHero />

      <HomeIntro />
      {/* <CreativeImageGrid /> */}
      <ImageGrid />
      {/* <VideoStrip /> */}
      <Testimonial />
      {/* <VideoGallery /> */}
      <ContactUs />
    </Layout>
  )
}

export default IndexPage
