import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Image from "./image"

export const CustomHero = styled.div`
  width: 100%;
  @media screen and (min-width: 1024px) {
    height: 100vh;
  }
`
export const Button = styled.button`
  border: 0.5px solid white;
  padding: 5px 15px;
  margin: 5px auto;
  height: 6vh;
  outline: none;
  &:hover {
    border: none;
    background-color: #ddc0b4;
    color: black;
  }
  @media screen and (min-width: 1024px) {
    margin: 0;
  }
`
const CHomeHero = () => {
  return (
    <CustomHero className="text-black h-full px-10 lg:px-20 bg-gray-900 z-10">
      <div className="pt-28 w-full flex items-center justify-between flex-col-reverse lg:flex-row">
        <div className="mx-auto text-white text-center lg:text-left mt-10 pb-20 lg:pt-12 flex flex-col items-start mb-10 lg:px-auto">
          <h2 className="tracking-widest text-4xl leading-relaxed lg:leading-relaxed uppercase lg:text-5xl lg:w-3/4 lg ">
            Placermama Flowers
          </h2>
          <h1 className="text-xl mb-10 mt-3 lg:text-xl mx-auto text-center w-3/4 lg:w-1/2 lg:float-left font-thin lg:text-left lg:mx-0">
            Los Angeles Custom Flower Arangements
          </h1>
          <Link to="/contact" className="mx-auto lg:mx-0">
            <Button>Contact Us</Button>
          </Link>
        </div>
        <div className="w-3/4 lg:w-1/2 mx-auto">
          <Image className="w-full lg:w-5/6 lg:h-full mx-auto" />
        </div>
      </div>
    </CustomHero>
  )
}

export default CHomeHero
