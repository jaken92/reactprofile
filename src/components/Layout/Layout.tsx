import { useState } from "react";
import { StyledHeader, StyledLayout } from "./Layout.styles";
import { NavLink } from "react-router-dom";
import { ThemeToggler } from "../ThemeToggler";
import { LayoutProps } from "./Layout.types";

export const Layout: React.FC<LayoutProps> = ({
  children,
  themeSwitch,
  theme,
}) => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerActive(!isHamburgerActive);
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsHamburgerActive(false);
  };

  return (
    <StyledLayout>
      <StyledHeader>
        <NavLink onClick={handleLinkClick} to="/" className="logo">
          <p>P</p>
        </NavLink>
        <nav>
          <ThemeToggler theme={theme} themeSwitch={themeSwitch} />
          <div className={`navMenu ${isHamburgerActive ? "active" : ""}`}>
            <NavLink onClick={handleLinkClick} to="/">
              HOME
            </NavLink>
            {/* <NavLink onClick={handleLinkClick} to="/playground">
              PLAYGROUND
            </NavLink> */}
            <NavLink onClick={handleLinkClick} to="/contact">
              CONTACT
            </NavLink>
          </div>

          <div
            onClick={handleHamburgerClick}
            className={`hamburger ${isHamburgerActive ? "active" : ""}`}>
            <span> </span>
          </div>
        </nav>
      </StyledHeader>
      {children}
    </StyledLayout>
  );
};
