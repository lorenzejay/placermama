import React from "react"
import DroneShot from "../videos/droneclip.mp4"
const VideoStrip = () => {
  return (
    <div className="videostrip w-full h-28 p-0 m-0">
      <video
        style={{ zIndex: "-1" }}
        className="object-cover w-full h-full relative "
        src={DroneShot}
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  )
}

export default VideoStrip
