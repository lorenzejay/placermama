import React from "react"
import Video from "./video"

const VideoGallery = () => {
  return (
    <div className="w-full p-4">
      <h2 className="text-4xl mb-20 text-center">Movies</h2>
      <div className="mt-2 flex flex-col items-center justify-center sm:grid sm:grid-cols-2 gap-4 mx-auto">
        <Video
          videoSrc="https://player.vimeo.com/video/380106142?title=0&byline=0&portrait=0"
          title="Anna + Brian"
        />
        <Video
          videoSrc="https://player.vimeo.com/video/384598339?title=0&byline=0&portrait=0"
          title="Reneice + Daniele"
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
