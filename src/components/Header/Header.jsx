import React from "react";
import Burger from "./Burger";
import Particles from "react-particles-js";
import styled, { keyframes } from "styled-components";

const Fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  animation: ${Fade} 2s ease;
  @media (min-width: 1860px) {
    width: 1860px;
    margin: 0 auto;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  height: 605px;
  background: #36325c;
  color: #eee7e7;
  display: flex;
  flex-direction: column;

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  @media (max-width: 520px) {
    height: 100vh;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2.9rem;
  text-shadow: 2px 1px #9c9ca1;
`;

const LandingText = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;
  animation: ${Fade} 2s ease;
  @media (min-width: 1860px) {
    width: 1860px;
    margin: 0 auto;
  }

  p {
    line-height: 60px;
    font-size: 2.3rem;
    @media (max-width: 485px) {
      font-size: 1.7rem;
      line-height: 50px;
    }

    @media (max-width: 320px) {
      font-size: 1.4rem;
    }
  }
`;

const BoldText = styled.span`
  font-weight: bold;
  font-size: 3.5rem;

  @media (max-width: 485px) {
    font-size: 2.6rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavHeader>
        <Title>B</Title>
        <Particles
          className="particles"
          height={window.outerHeight}
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: true,
                opacity: 0.05,
              },
              move: {
                direction: "right",
                speed: 0.25,
              },
              size: {
                value: 1,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <Burger />
      </NavHeader>
      <LandingText>
        <p>
          <BoldText>Hi,</BoldText> <br /> I'm <span className="shadow">B</span>
          runo <span className="shadow">A</span>scenção
          <br /> a Front-End Web Develper
        </p>
      </LandingText>
    </HeaderContainer>
  );
};

export default Header;
