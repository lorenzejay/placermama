import React from "react"
import Video from "./video"

const VideoGallery = () => {
  return (
    <div className="w-full  ">
      <h2 className="text-4xl mb-20 text-center">Movies</h2>
      <div className="flex flex-col items-center justify-center my-24 p-4 xl:px-48 md:grid md:grid-cols-2 md:gap-5">
        <Video
          videoSrc="https://player.vimeo.com/video/380106142?title=0&byline=0&portrait=0"
          title="Anna + Brian"
        />
        <Video
          videoSrc="https://player.vimeo.com/video/384598339?title=0&byline=0&portrait=0"
          title="Reneice + Daniele"
        />
      </div>
    </div>
  )
}

export default VideoGallery
