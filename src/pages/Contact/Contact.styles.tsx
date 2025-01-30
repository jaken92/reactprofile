import styled, { css } from "styled-components";

export const StyledContactPage = styled.section`
  min-height: calc(100vh - 63px); // - header height
  margin-top: 63px; // headerHeightk
  z-index: 4;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContactForm = styled.section(
  ({ theme }) => css`
    margin: auto auto;
    background-color: ${theme.isDark ? theme.secondary : theme.primary};
    width: 32rem;
    border-radius: 20px;
    padding: 0.8rem;
    padding-top: 5px; //TODO: replace magic number to compensate fieldset legend.
    box-shadow: ${theme.isDark
      ? "none"
      : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"};

    & > fieldset {
      border: 1px solid ${theme.accent};
      border-radius: 5px;
      width: 100%;
      padding: 20px;

      & > legend {
        padding: 0px 6px;
        color: ${theme.accent};
        text-transform: uppercase;
      }

      & .thankYouBox {
        height: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: ${theme.primary};
        transition: color 3s ease;
        visibility: hidden;
      }

      & .visible {
        color: ${theme.accent};
        visibility: visible;
        height: 70dvh;
      }

      & .hidden {
        visibility: hidden;
        height: 0px;
      }

      & form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
        margin: 0 auto;
        width: 100%;
        overflow-x: none;

        & > div {
          width: 100%;
          margin-bottom: 1rem;

          & button {
            border: 2px solid ${theme.accent};
            font-size: 1rem;
            background-color: transparent;
            color: ${theme.accent};
            border-radius: 5px;
            cursor: pointer;
            padding: 5px 8px;
            transition: 0.3s;
            flex-shrink: 0;
            margin: 0 0.5rem 0 0;

            & > .spinner {
              height: 15px;
              animation: spin 1s linear infinite;
              margin-inline: 8px;
            }

            &:hover {
              background-color: ${theme.accent};
              color: ${theme.primary};
            }

            &:active {
              scale: 0.9;
            }
          }
        }
      }
    }

    @media only screen and (max-width: 750px) {
      width: 22rem;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `
);
