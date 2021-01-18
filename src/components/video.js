import React from "react"

const Video = ({ videoSrc, title }) => {
  return (
    <div
      className="w-full relative my-5 flex items-center justify-center text-center"
      style={{
        paddingTop: "56.25%",
      }}
    >
      <iframe
        style={{
          display: "block",
          position: "absolute",
          objectFit: "cover",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          margin: "0 auto",
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
