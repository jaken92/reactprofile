import styled, { css } from "styled-components";
import { StyledTextInputProps } from "./TextInput.types";

export const StyledTextInput = styled.div<StyledTextInputProps>(
  ({ showError, errorMsg, theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-bottom: "5px";
    width: 100%;
    overflow-x: none;
    position: relative;

    &::after {
      content: ${errorMsg && showError ? `"${errorMsg}"` : ""};
      color: red;
      bottom: 0px;
      right: 0px;
      padding-inline: 5px;
      height: 15px;
      position: absolute;
      background-color: transparent;
      border-radius: 3px;
      font-size: 10px;
    }

    & > label {
      /* display: block; */
      margin-bottom: "5px";
    }

    & > input,
    textarea {
      padding: 8px;
      border: ${showError ? "1px solid red" : "1px solid #ccc"};
      border-radius: 4px;
      font-size: 14px;
      width: 100%;
      resize: none;
    }

    & > textarea {
      height: 10rem;
    }

    & > input:focus,
    textarea:focus {
      /* outline: 1px solid ${theme.accent}; */
      outline: ${showError ? "1px solid red" : `1px solid ${theme.accent}`};
    }
  `
);
