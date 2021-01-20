import React from "react"
import { Link as LinkG } from "gatsby"
import PropTypes from "prop-types"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"

export const Nav = styled.header`
  //handle transitions here
  /* background: transparent; */
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;

  font-size: 1rem;
  /* position: absolute; */
  top: 0;
  z-index: 100;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;

  /* max-width: 1100px; */
`

//we are grabbing the link from gatsby link
export const NavLink = styled(LinkG)`
  color: #ffffff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 6px;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 85%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

//scroll links
export const NavLinks = styled(LinkG)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`

const Header = ({ siteTitle, homePage, toggle }) => {
  return (
    <>
      <Nav
        className={`px-5 lg:px-20 ${
          homePage ? "absolute bg-transparent" : "bg-pink-50"
        }`}
      >
        <NavContainer>
          <NavLink className="text-base" to="/">
            <h2 className="text-2xl tracking-widest font-thin">Placermama</h2>
          </NavLink>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/pricing">Pricing</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
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
