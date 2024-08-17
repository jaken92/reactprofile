import { ReactNode } from "react";
import { StyledLayout } from "./Layout.styles";
import { Link } from "react-router-dom";
import { ThemeToggler } from "../ThemeToggler";
import styled from "styled-components";

type LayoutProps = {
  children: ReactNode;
  themeSwitch: () => void;
  theme: "dark" | "light";
};

export const StyledNav = styled.nav`
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-family: system-ui, sans-serif;
  font-weight: normal;

  & > div {
    display: flex;
    justify-content: flex-end;
    gap: 2rem;
    align-items: center;

    & > a {
      text-decoration: none;
      color: ${(props) => props.theme.text};
    }
  }
`;

export const Layout: React.FC<LayoutProps> = ({
  children,
  themeSwitch,
  theme,
}) => {
  return (
    <StyledLayout>
      <StyledNav>
        <span>Logo</span>
        <div>
          <Link to="/">HOME</Link>
          <Link to="/playground">PLAYGROUND</Link>
          <ThemeToggler theme={theme} themeSwitch={themeSwitch} />
        </div>
      </StyledNav>
      {children}
    </StyledLayout>
  );
};
