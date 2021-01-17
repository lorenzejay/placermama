import React from "react"
import styled from "styled-components"
import Timelapse from "../videos/herotimelapse.mp4"
export const Hero = styled.section`
  height: 75vh;
  width: 100%;
`

const VideoHero = () => {
  return (
    <Hero className="flex flex-col items-center text-white object-contain pb-0 mb-0">
      <video
        style={{ zIndex: "-1" }}
        className="object-cover h-full w-full  relative "
        src={Timelapse}
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-1/3 mt-20 left-0 z-10 w-full m-auto text-center px-3">
        <h1 className="text-4xl uppercase mb-20 font-bold">
          Let us capture your adventure
        </h1>
        <p className="text-xl hidden sm:inline-block">
          Creating a memory that will last a lifetime.
        </p>
      </div>
    </Hero>
  )
}

export default VideoHero
