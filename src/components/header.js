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
      /* transition: transform 0.5s ease-in-out;
      transform: scale(0%); */
      display: none;
      position: absolute;
      right: 0;
      flex-direction: column;
      gap: 8vh;
      align-items: center;
      justify-content: center;
      height: 90vh;
      top: 6rem;
      width: 100%;
      transition: all 1s ease-in;
      a {
        font-size: x-large;
      }
    }

    .active {
      display: flex;
      animation: fadeIn ease 0.5s;
      -webkit-animation: fadeIn ease 0.5s;
      -moz-animation: fadeIn ease 0.5s;
      -o-animation: fadeIn ease 0.5s;
      -ms-animation: fadeIn ease 0.5s;
    }
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-moz-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-webkit-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-o-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @-ms-keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`

const Header = ({ siteTitle, homePage }) => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <NavbarCustom
      className={`h-24 w-full flex items-center justify-between ${
        homePage ? "text-white" : "relative bg-black text-white"
      } px-3 sm:px-24 ${
        click ? "relative bg-black" : "absolute bg-transparent"
      }`}
    >
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
            ? "nav-menu active bg-black"
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
  homePage: false,
}

export default Header
