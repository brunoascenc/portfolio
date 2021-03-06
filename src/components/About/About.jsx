import React from "react";
import styled, { keyframes } from "styled-components";

const Fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 485px;
  animation: ${Fade} 2s ease;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #494646;
  letter-spacing: 1px;
  font-weight: 100;
  font-size: 2.3rem;
  &::after {
    content: "";
    background: #666060;
    width: 50px;
    height: 1px;
    margin-top: 7px;
  }
`;

const AboutTxt = styled.p`
  color: #2b2828;
  margin-top: 45px;
  text-align: center;
  width: 800px;
  line-height: 35px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  @media (max-width: 980px) {
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
  }

  @media (max-width: 520px) {
    font-size: 1rem;
  }

  @media (max-width: 420px) {
    line-height: 30px;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Title>About</Title>
      <AboutTxt>
        IT student passionate about front-end development and web design. I
        developed an enrollment portal for the Centro Universitário das
        Faculdades Metropolitanas Unidas, and I also worked as a designer
        creating flyers and business cards for local establishments in my
        region.
      </AboutTxt>
    </AboutSection>
  );
};

export default About;
