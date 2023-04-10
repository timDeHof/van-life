import React from 'react';
import styled from 'styled-components';

const FooterBanner = styled.footer`
 background: #252525;
 height: 100%;
`;

const Copyrights = styled.div`
    color: #FFF;
    padding: 25px 106px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;
    text-align: center;
    color: #AAAAAA;
    
`

export function Footer() {
    return (
        <FooterBanner>
            <Copyrights><span>Ⓒ</span> 2022 #VANLIFE</Copyrights>
        </FooterBanner>   
    )  
};