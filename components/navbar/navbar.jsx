import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const NavbarWrapper = styled.ul`
  background-color: #fff7ed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 24px 36px;
  list-style-type: none;
`
const LinkWrapper = styled.div`
  display: flex;
  gap: 12px;
`
const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #4d4d4d;
  font-weight: 600;
  padding: 5px 20px;
  &:hover {
    color: #161616;
    text-decoration: underline;
  }
`
const LogoLink = styled(NavbarLink)`
  color: #000;
  font-weight: 900;
  font-size: 25px;
  text-decoration: none;
  text-transform: uppercase;
`

export function Navbar() {
  return (
    <NavbarWrapper>
      <LogoLink to='/'>#VanLife</LogoLink>
      <LinkWrapper>
        <NavbarLink to='/about'>About</NavbarLink>
        <NavbarLink to='/vans'>Vans</NavbarLink>
      </LinkWrapper>
    </NavbarWrapper>
  )
}
