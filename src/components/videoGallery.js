import React from "react"
import Video from "./video"

const VideoGallery = () => {
  return (
    <div className="w-full flex flex-col items-center my-24 p-4 md:px-48">
      <h2 className="text-4xl mb-20">Movies</h2>
      <Video
        videoSrc="https://player.vimeo.com/video/384598339?title=0&byline=0&portrait=0"
        title="Reneice + Daniele"
      />
    </div>
  )
}

export default VideoGallery
