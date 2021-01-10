import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoHero from "../components/videoHero"

const IndexPage = () => (
  <Layout homePage={true}>
    <SEO title="Home" />
    <VideoHero />
  </Layout>
)

export default IndexPage
