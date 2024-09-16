import styled, { css } from "styled-components";
import { StyledFancyButtonProps } from "./FancyButton.types";

export const StyledFancyButton = styled.button<StyledFancyButtonProps>(
  ({ color, theme }) => css`
    border: 2px solid ${color ? color : theme.accent};
    font-size: 1rem;
    background-color: transparent;
    color: ${color ? color : theme.accent};
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 8px;
    transition: 0.3s;
    flex-shrink: 0;

    &:hover {
      background-color: ${color ? color : theme.accent};
      color: ${color ? color : theme.primary};
    }

    &:active {
      scale: 0.9;
    }

    @media only screen and (min-width: 1750px) {
      font-size: 24px;
    }
  `
);
