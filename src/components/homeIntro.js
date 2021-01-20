import React from "react"
import styled from "styled-components"
import Instagrid from "./instagrid"

export const Intro = styled.section`
  background: #f3ebe3;
`
const HomeIntro = () => {
  return (
    <Intro className="py-24 h-full lg:pt-52">
      <h1 className="text-4xl w-full mt-12 mb-6 text-center">
        Los Angeles Flower Arrangements
      </h1>
      <p className="px-5 text-md sm:w-3/4 text-center sm:mx-auto leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Instagrid />
    </Intro>
  )
}

export default HomeIntro
