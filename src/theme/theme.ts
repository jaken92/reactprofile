import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  primary: "hsl(43, 46%, 87%)", //lightbrown
  primary_1: "hsl(43, 46%, 91%)", //lighter lightbrown
  text: "#544d43", // darkbrown
  accent: "hsla(80, 45%, 29%, 1)", // green
  secondary: "hsla(80, 45%, 29%, 1)", // green
  secondary_1: "hsla(80, 45%, 33%, 1)", //lighter green
  secondary_2: "hsla(80, 45%, 37%, 1)", //lightest green

  // hover: "hsl(213, 14%, 53%, 1)",
  hover: "#7a7866",
  isDark: false,
};

export const darkTheme: DefaultTheme = {
  primary: "hsl(222, 36%, 5%)", //black
  primary_1: "hsl(222, 36%, 5%)", // lighter black
  text: "hsl(0, 0%, 87%)", //white
  accent: "hsla(172, 100%, 50%, 1)", //aqua
  secondary: "hsl(213, 14%, 13%, 1)", //gray
  secondary_1: "hsl(213, 14%, 17%, 1)", //lighter gray
  secondary_2: "hsl(213, 14%, 23%, 1)", //lightest gray
  hover: "hsl(0, 0%, 97%)",

  isDark: true,
};
