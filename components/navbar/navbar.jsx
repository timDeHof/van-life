import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavbarWrapper = styled.ul`
    background-color: #FFF7ED;
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
    color: #4D4D4D;
    font-family: 'Inter',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    text-decoration: none;
    text-align: right;
`
const LogoLink = styled(NavbarLink)`
    color: #000;
    font-weight: 900;
    font-size: 25.3531px;
    line-height: 40px;
    text-decoration: none;
    text-transform: uppercase;
    
    & img {
        width:144px;
        height: auto;
    } 
`

export function Navbar() {
    return (
        <NavbarWrapper>
          <LogoLink to="/" ><img src="../../assets/logog.png"/></LogoLink>
          <LinkWrapper>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/vans">Vans</NavbarLink>
          </LinkWrapper>
        </NavbarWrapper>
    )
}