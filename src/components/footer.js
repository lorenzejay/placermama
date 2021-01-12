import React from "react"
import { FaFacebook, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="mt-12 bg-gray-300 h-32 flex flex-col justify-center items-center">
      <div className="flex justify-around gap-5">
        <a>
          <FaInstagram size="24" />
        </a>
        <a>
          <FaFacebook size="24" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
