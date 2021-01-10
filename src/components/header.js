import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FaTimes, FaBars } from "react-icons/fa"
import styled from "styled-components"

export const NavbarCustom = styled.header`
  //handle transitions here
  @media screen and (max-width: 640px) {
    ul {
      z-index: 30;
      position: absolute;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 90vh;
      top: 6rem;
      width: 100%;
      transition: transform 0.5s ease-in;
      transform: translateX(100%);
    }
    .active {
      transform: translateX(0%);
    }
  }
`

const Header = ({ siteTitle }) => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  console.log(click)
  return (
    <NavbarCustom className="bg-transparent absolute h-24 w-full flex items-center justify-between text-white px-3 sm:px-24">
      <h1 className="text-base">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <div
        className="menu-icon cursor-pointer block md:hidden"
        onClick={handleClick}
      >
        <span>{click ? <FaTimes /> : <FaBars />}</span>
      </div>

      <ul
        className={
          click
            ? "nav-menu active bg-gray-700"
            : "nav-menu flex w-56 justify-around  "
        }
      >
        <li>
          <Link to="/" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="page-2" onClick={closeMobileMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </NavbarCustom>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
