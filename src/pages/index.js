import React from "react"
import ContactUs from "../components/contactUs"
import ImageGrid from "../components/imageGrid"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoGallery from "../components/videoGallery"
import VideoHero from "../components/videoHero"
import VideoStrip from "../components/videoStrip"

const IndexPage = () => (
  <Layout homePage={true}>
    <SEO title="Home" />
    <VideoHero />
    <ImageGrid />
    <VideoStrip />
    <VideoGallery />
    <ContactUs />
  </Layout>
)

export default IndexPage
