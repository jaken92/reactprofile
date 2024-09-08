import { ReactNode, useState } from "react";
import { StyledLayout } from "./Layout.styles";
import { NavLink } from "react-router-dom";
import { ThemeToggler } from "../ThemeToggler";
import styled from "styled-components";
import Logo from "../../assets/images/logo.png";

type LayoutProps = {
  children: ReactNode;
  themeSwitch: () => void;
  theme: "dark" | "light";
};

export const StyledHeader = styled.header`
  width: 100%;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 1rem;
  font-family: system-ui, sans-serif;
  font-weight: normal;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 99;
  /* border-bottom: 1px solid ${(props) => props.theme.white}; */

  & > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    & > .navMenu {
      display: flex;
      justify-content: space-around;
      gap: 1rem;
      transition: left 0.3s ease; // Add transition

      & > a {
        text-decoration: none;
        color: ${(props) => props.theme.white};
        position: relative;
      }

      & > a::before {
        content: "";
        position: absolute;
        width: 100%;
        background-color: ${(props) => props.theme.white};
        height: 3px;
        width: 0%;
        top: -3px;
        right: 0px;
        transition: 0.5s;
      }

      & > a::after {
        content: "";
        position: absolute;
        width: 100%;
        background-color: ${(props) => props.theme.white};
        height: 3px;
        width: 0%;
        bottom: -3px;
        left: 0px;
        transition: 0.5s;
      }

      & > a:hover:after,
      a:hover:before {
        width: 100%;
      }

      & > a.active {
        font-weight: 600;
      }

      /* & > a.active:before,
      a.active:after {
        width: 0%;
      } */
    }

    & > .hamburger {
      width: 30px;
      height: 30px;
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;

      & > span {
        width: 20px;
        height: 2px;
        background-color: ${(props) => props.theme.white};
        position: relative;
        transition: 0.1s ease;
      }

      & > span::before,
      & > span::after {
        width: 20px;
        height: 2px;
        background-color: ${(props) => props.theme.white};
        position: absolute;
        content: "";
        transition: 0.3s ease;
      }

      & > span::before {
        top: -5px;
      }

      & > span::after {
        bottom: -5px;
      }
    }

    & > .hamburger.active {
      & > span {
        visibility: hidden;
      }

      & > span::before {
        visibility: visible;
        top: 0px;
        transform: rotate(45deg);
      }

      & > span::after {
        visibility: visible;
        bottom: 0px;
        transform: rotate(-45deg);
      }
    }

    @media screen and (max-width: 750px) {
      & > .hamburger {
        display: flex;
      }

      & > .navMenu {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 20vh;
        align-items: center;
        font-size: 32px;
        height: 100vh;
        width: 100%;
        left: -100%;
        top: 62px;
        background-color: ${(props) => props.theme.black};
      }

      & > .navMenu.active {
        left: 0%;
      }

      & > .navMenu.active {
        left: 0px;
      }
    }
  }
`;

export const Layout: React.FC<LayoutProps> = ({
  children,
  themeSwitch,
  theme,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsActive(false);
  };

  return (
    <StyledLayout>
      <StyledHeader>
        <NavLink onClick={handleLinkClick} to="/" className="logo">
          <img src={Logo} alt="p-logo" style={{ height: "32px" }} />
        </NavLink>
        <nav>
          <ThemeToggler theme={theme} themeSwitch={themeSwitch} />
          <div className={`navMenu ${isActive ? "active" : ""}`}>
            <NavLink onClick={handleLinkClick} to="/">
              HOME
            </NavLink>
            <NavLink onClick={handleLinkClick} to="/playground">
              PLAYGROUND
            </NavLink>
            <NavLink onClick={handleLinkClick} to="/contact">
              CONTACT
            </NavLink>
          </div>

          <div
            onClick={handleHamburgerClick}
            className={`hamburger ${isActive ? "active" : ""}`}>
            <span> </span>
          </div>
        </nav>
      </StyledHeader>
      {children}
    </StyledLayout>
  );
};
