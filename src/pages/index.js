import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import VideoHero from "../components/videoHero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VideoHero />
  </Layout>
)

export default IndexPage
