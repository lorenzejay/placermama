import React from "react"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import Instagrid from "./instagrid"

const Footer = ({ author }) => {
  return (
    <footer className="mt-12 bg-gray-300  flex flex-col justify-center items-center w-full">
      <Instagrid />
      <div className="flex justify-around gap-5">
        <h4>{author}</h4>
      </div>
    </footer>
  )
}

export default Footer
