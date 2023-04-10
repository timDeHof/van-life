import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)), url("../../assets/mountain-view.png") no-repeat fixed center;
    background-size: 100% 100%;
    margin: 0;
    padding: 0;
    height: auto;
`
const CTA = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: #FFF;
   padding: 65px 26px;
    gap: 24px;
   
`
const Title = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 42px; 
    margin: 0; 
`

const SubTitle = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
`

const CTAButton = styled.button`
    background: #FF8C38;
    border-radius: 5px;
    border: none;
    margin: 0 26px;
    max-width: 494px;
    padding: 8px 143px;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-spacing: 1.4;
    line-height: 32px;
    text-align: center;
    color: #FFF;
`

export default function Home() {
  return (
      <HomeWrapper>
        <CTA>
            <Title>You got the travel plans, we got the travel vans.</Title>
            <SubTitle>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</SubTitle>
            <CTAButton>Find your van</CTAButton>
        </CTA>
      </HomeWrapper>
  )
}