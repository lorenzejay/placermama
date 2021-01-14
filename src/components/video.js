import React from "react"

const Video = ({ videoSrc, title }) => {
  return (
    <div
      className="w-full relative overflow-hidden "
      style={{
        paddingTop: "56.25%",
      }}
    >
      <iframe
        style={{
          position: "absolute",
          objectFit: "cover",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
        }}
        title={title}
        src={videoSrc}
        allow="autoplay; encrypted-media; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  )
}

export default Video
