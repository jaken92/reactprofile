import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    primary_1: string;
    secondary: string;
    secondary_1: string;
    secondary_2: string;
    accent: string;
    text: string;
    isDark: boolean;
  }
}
