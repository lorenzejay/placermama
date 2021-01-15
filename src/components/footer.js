import React from "react"
import { FaYoutube, FaInstagram, FaVimeo } from "react-icons/fa"
// import Instagrid from "./instagrid"

const Footer = ({ author }) => {
  return (
    <footer className="mt-12 bg-gray-300  flex flex-col justify-center items-center w-full h-48">
      <div className="flex flex-col items-center justify-around gap-5">
        <div className="flex gap-5">
          <a>
            <FaYoutube size={24} />
          </a>
          <a>
            <FaInstagram size={24} />
          </a>
          <a>
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
