import React from "react"
// import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const ImageHero = ({ className, imageSrc }) => {
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageSrc}
      backgroundColor={`#040e18`}
    >
      <h2>gatsby-background-image</h2>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(ImageHero)`
  width: 100%;
  height: 50vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
