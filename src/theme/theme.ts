import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  primary: "hsl(43, 46%, 87%)", //lightbrown
  text: "#544d43", // darkbrown
  accent: "hsla(80, 45%, 29%, 1)", // green
  secondary: "hsla(80, 45%, 29%, 1)", // green
  hover: "hsl(213, 14%, 53%, 1)",
  isDark: false,
};

export const darkTheme: DefaultTheme = {
  primary: "hsl(222, 36%, 5%)", //black
  text: "hsl(0, 0%, 87%)", //white
  accent: "hsla(172, 100%, 50%, 1)", //aqua
  secondary: "hsl(213, 14%, 13%, 1)", //gray
  hover: "hsl(0, 0%, 97%)",
  isDark: true,
};
