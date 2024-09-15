import { ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
  themeSwitch: () => void;
  theme: "dark" | "light";
};
