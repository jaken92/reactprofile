import styled, { css } from "styled-components";

export const StyledProjects = styled.main(
  ({ theme }) => css`
    min-height: calc(100dvh - 63px); // - header height
    margin-top: 63px; // headerHeightk

    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      z-index: 4;
      background-color: ${theme.isDark ? theme.secondary : theme.primary};

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
        padding: 2rem;
        width: 42rem;

        & > legend {
          padding: 0px 6px;
          color: ${theme.accent};
          text-transform: uppercase;
        }

        & > ul {
          margin: 0;
          padding: 0 2rem;
          display: block;
          height: 550px;
          overflow: auto;

          border-radius: 5px;

          & > li {
            all: unset;

            details[open] > summary {
              border-bottom: 2px solid ${theme.accent};
            }

            & > details {
              margin: 1.5rem 0;
              border: 2px solid ${theme.accent};
              border-radius: 5px;
              color: ${theme.text};
              box-shadow: ${theme.isDark
                ? "none"
                : "rgba(100, 100, 111, 0.5) 5px 5px 10px 2px"};

              & > summary {
                border-radius: 5px;
                all: unset;
                display: block;
                padding: 1rem 1rem;
                background-color: ${theme.isDark
                  ? "hsl(213, 14%, 17%, 1)"
                  : theme.accent};
                color: ${theme.isDark ? theme.text : theme.primary};

                & > h2 {
                  display: flex;
                  justify-content: space-between;
                  font-size: 1rem;

                  & > span:last-child {
                    text-align: right;
                  }
                }

                &:hover {
                  cursor: pointer;
                }
              }

              & > div {
                padding: 2rem 2rem;
                border-radius: 5px;

                background-color: ${theme.isDark
                  ? theme.secondary_2
                  : theme.primary};

                & > ul {
                  border-radius: 5px;
                  padding: 0.5rem;

                  & > .row:last-child {
                    text-align: right;
                  }

                  & > li {
                    all: unset;
                    margin: 0.5rem 0;
                    display: flex;
                    justify-content: space-between;
                    background-color: ${theme.isDark
                      ? theme.secondary_1
                      : theme.primary_1};
                    border-radius: 5px;
                    padding: 0.5rem;
                    font-size: 12px;

                    & > p a {
                      color: ${theme.text};
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    @media only screen and (max-width: 750px) {
      & > div {
        & > fieldset {
          padding: 0.5rem;
          width: 22rem;

          & > ul {
            padding: 0.5rem;

            & > li {
              & > details {
                box-shadow: ${theme.isDark
                  ? "none"
                  : "rgba(100, 100, 111, 0.5) 3px 3px 5px 2px"};

                & > div {
                  padding: 0rem;

                  & > ul li p {
                    font-size: 10px;
                  }
                }

                & > summary {
                  & > h2 {
                    font-size: 12px;

                    & > span {
                      max-width: 50%;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
);
