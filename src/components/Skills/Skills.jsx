import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoSass } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { FaGit } from "react-icons/fa";
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

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #494646;
  letter-spacing: 1px;
  font-weight: 100;
  font-size: 2.3rem;
  margin-bottom: 25px;
  margin-top: 85px;
  scroll-margin-top: 45px;
  animation: ${Fade} 2s ease;
  &::after {
    content: "";
    background: #666060;
    width: 50px;
    height: 1px;
    margin-top: 7px;
  }
`;

const SkillSection = styled.section`
  height: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #36325c;
  position: relative;

  @media (max-width: 995px) {
    height: 100%;
    padding: 75px 0 75px 0;
  }

  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const SkillsIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  align-items: center;
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  z-index: 100;
  animation: ${Fade} 2s ease;
  @media (min-width: 995px) {
    width: 920px;
    margin: 0 auto;
  }

  @media (max-width: 995px) {
    width: 100%;
    padding-right: 5%;
    padding-left: 5%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f7f3f3;
    border-radius: 8px;
    padding: 25px 50px 25px 50px;
    box-shadow: -1px 5px 10px 2px rgba(34, 33, 33, 0.2);

    p {
      margin-top: 20px;
      color: #353232;
    }
  }
`;

const Skills = () => {
  return (
    <>
      <Title id="skills">Skills</Title>
      <SkillSection>
        {/* <Title>Skills</Title> */}
        <Particles
          className="particles"
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
                opacity: 0.02,
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
        <SkillsIcons>
          <div>
            <AiFillHtml5 color="#f06529" size={100} />
            <p>Html5</p>
          </div>
          <div>
            <IoLogoCss3 color="#2965f1" size={100} />
            <p>Css3</p>
          </div>
          <div>
            <IoLogoJavascript color="#323330" size={100} />
            <p>JavaScript</p>
          </div>
          <div>
            <GrReactjs color="#61DBFB" size={100} />
            <p>ReactJS</p>
          </div>
          <div>
            <BsFillBootstrapFill color="#080135" size={100} />
            <p>Bootstrap</p>
          </div>
          <div>
            <IoLogoSass color="#c69" size={100} />
            <p>Sass</p>
          </div>

          <div>
            <FaGit color="#f34f29" size={100} />
            <p>Git</p>
          </div>

          <div>
            <FiFigma color="#7043A8" size={100} />
            <p>Figma</p>
          </div>
        </SkillsIcons>
      </SkillSection>
    </>
  );
};

export default Skills;
