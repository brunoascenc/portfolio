import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #474375;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 60%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }

  @media (max-width: 560px) {
    width: 100%;
  }
`;

const Nav = styled.nav`
  height: 100px;
  display: flex;

  ${Ul} {
    li {
      margin: 16px;
      font-size: 1.2rem;
      font-weight: bold;
      z-index: 100;
      @media (max-width: 768px) {
        font-size: 2rem;
        margin: 35px;
      }

      @media (max-width: 320px) {
        font-size: 1.6rem;
        margin: 30px;
      }

      a {
        cursor: pointer;
        color: #eee7e7;
        text-decoration: none;
        font-weight: 300;
        letter-spacing: 1px;
        &:hover {
          color: #ddcfcf;
          transition: 0.2s ease;
        }
      }
    }
  }
`;

const RightNav = ({ open, closeMobileMenu }) => {
  return (
    <Nav>
      <Ul open={open}>
        <li>
          <a onClick={closeMobileMenu} href="https://github.com/brunoascenc">
            <AiFillGithub size={35} />
          </a>
        </li>
        <li>
          <HashLink onClick={closeMobileMenu} smooth to="#about">
            About
          </HashLink>
        </li>
        <li>
          <HashLink onClick={closeMobileMenu} smooth to="#skills">
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink onClick={closeMobileMenu} smooth to="/#projects">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink onClick={closeMobileMenu} smooth to="#contact">
            Contact
          </HashLink>
        </li>
      </Ul>
    </Nav>
  );
};

export default RightNav;
