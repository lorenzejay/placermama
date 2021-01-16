import React from "react"
import { FaYoutube, FaInstagram, FaVimeo } from "react-icons/fa"
// import Instagrid from "./instagrid"

const Footer = ({ author }) => {
  return (
    <footer className="mt-12 bg-gray-300  flex flex-col justify-center items-center w-full h-48">
      <div className="flex flex-col items-center justify-around gap-5">
        <div className="flex gap-10 justify-center w-full">
          <a href="https://www.youtube.com/">
            <FaYoutube size={24} />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.vimeo.com">
            <FaVimeo size={24} />
          </a>
        </div>
        <hr className="border-black h-3 z-10" />
        <h4>
          Copyright &copy; {new Date().getFullYear()} {author}
        </h4>
      </div>
    </footer>
  )
}

export default Footer
