import React from "react";
import styled from "styled-components";
const AboutSection = styled.section`
    background: #FFF7ED;
    margin: 0;
    height: auto;
`
const HeaderIMG = styled.img`
    width: 100%;
    height: 233px;
`
const ContextWrapper = styled.div`
    padding: 27px 56px 45px;
`
const Title = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
`
const Body = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
`
const CTA = styled.div`
    background: #FFCC8D;
    border-radius: 5px;
    padding: 32px 37px;
    margin: 0 27px;
    margin-bottom: 56px;
`
const CTAHeading = styled.h2`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #161616;
`
const SharedButton = styled.button`
    background: #161616;
    border-radius: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 15.9462px;
    line-height: 24px;
    color: #FFF;
    border: none;
    padding: 12px 22px; 
`
export default function About() {
  return (
      <AboutSection>
      <HeaderIMG src="../../assets/camping.png"/>
      <ContextWrapper>
      <Title>Don’t squeeze in a sedan when you could relax in a van.</Title>
      <Body>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)</Body>
        <Body>
Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</Body>
      </ContextWrapper>
      <CTA>
        <h2>Your destination is waiting.
Your van is ready.</h2>
<SharedButton>Explore our vans</SharedButton>
      </CTA>
      </AboutSection>
  )
}