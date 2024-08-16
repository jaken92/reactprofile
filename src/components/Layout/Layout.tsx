import { ReactNode } from "react";
import { Header } from "../Header/Header";
import { StyledLayout, StyledNav } from "./Layout.styles";
import { Link } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
  themeSwitch: () => void;
};

export const Layout: React.FC<LayoutProps> = ({ children, themeSwitch }) => {
  return (
    <StyledLayout>
      <StyledNav>
        <Link to="/">Home</Link>
        <Link to="/playground">Playground</Link>
      </StyledNav>
      <button onClick={themeSwitch}>Theme</button>
      {children}
    </StyledLayout>
  );
};
