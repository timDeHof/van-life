import React from "react"
import styled from "styled-components"

const HomeWrapper = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),
    url("/../assets/mountain-view.png") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 350px;
  color: #fff;
  padding: 45px 23px;
`
const CTA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 65px 26px;
  gap: 24px;
`
const Title = styled.p`
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 42px;
`

const SubTitle = styled.p`
  line-height: 24px;
`

const CTAButton = styled.button`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background: #ff8c38;
  border: none;
  width: 100%;
  margin-top: 27px;
  padding-block: 0.75rem;
  color: #fff;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: translate(1px, 1px);
  }
`

export default function Home() {
  return (
    <HomeWrapper>
      <CTA>
        <Title>You got the travel plans, we got the travel vans.</Title>
        <SubTitle>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </SubTitle>
        <CTAButton>Find your van</CTAButton>
      </CTA>
    </HomeWrapper>
  )
}
