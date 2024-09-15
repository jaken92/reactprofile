import styled, { css } from "styled-components";
import smallSliderImg from "../../assets/images/techsliderLightSmall.png";
import bigSliderImg from "../../assets/images/techsliderLightBig.png";

export const StyledMain = styled.main(
  ({ theme }) => css`
    & * {
      z-index: 2;
    }

    & > .sectionOne {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-family: system-ui, sans-serif;
      min-height: 100vh;
      min-height: 100dvh;

      & > h1 {
        color: ${theme.text};
        font-size: clamp(3rem, 4vw + 1rem, 6rem);
        text-align: center;
        line-height: normal;

        & > span {
          color: ${theme.accent};
          text-shadow: 0.5px 0.5px 3px ${theme.accent};
        }
      }

      & > .twText {
        margin-top: 2rem;
        font-size: clamp(1rem, 2vw, 4rem);
        font-weight: 500;
        position: relative;
        font-family: "Nimbus Mono PS", "Courier New", monospace;
        line-height: 1.5;

        &::before,
        &::after {
          content: "";
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          position: absolute;
        }

        &::before {
          background-color: ${theme.primary};
          animation: typewriter 5.5s steps(37) 1s forwards;
        }

        &::after {
          width: 0.08em;
          background-color: ${theme.text};
          animation: typewriter 5.5s steps(37) 1s forwards,
            blink 750ms steps(37) infinite;
        }

        @keyframes typewriter {
          to {
            left: 100%;
          }
        }

        @keyframes blink {
          to {
            background: transparent;
          }
        }
      }
    }

    & > .sectionTwo {
      overflow-x: hidden;

      & > .sliderContainer {
        overflow: hidden;
        width: 100%;
        border-bottom: 1px solid ${theme.accent};
        border-top: 1px solid ${theme.accent};

        & > .slider {
          background: url(${bigSliderImg}) repeat-x;
          width: 4719px; /* img width times 3 */
          height: 265px; /* img height */
          animation: roll 20s linear infinite;
        }

        @keyframes roll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-1573px, 0, 0); /* img width */
          }
        }
      }
    }

    & > .footer {
      border-top: 1px solid ${theme.secondary};
      display: grid;
      min-height: 20vh;
      grid-template-columns: 1fr 1fr 1fr;
      grid-auto-rows: minmax(100px, auto);
      align-content: center;

      & > a {
        font-weight: 600;
        text-transform: uppercase;
        justify-self: center;
        align-self: center;
        text-decoration: none;
        color: ${theme.text};
        position: relative;
      }

      & > a:hover {
        color: ${theme.hover};
      }
    }

    @media only screen and (max-width: 750px) {
      & > .sectionTwo {
        & > .sliderContainer {
          overflow: hidden;
          width: 100%;
          border-bottom: 1px solid ${theme.accent};
          border-top: 1px solid ${theme.accent};

          & > .slider {
            background: url(${smallSliderImg}) repeat-x;
            width: 3276px; // img width x 3
            height: 174px; // img height
            animation: roll 10s linear infinite;
          }

          @keyframes roll {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-1092px, 0, 0); //img width
            }
          }
        }
      }
    }
  `
);

export const StyledSectionThree = styled.section(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12rem 0rem;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 60%;

      & > h2 {
        position: relative;
        font-size: clamp(1.5rem, 2vw + 0.5rem, 4rem);
        line-height: 1.2;
      }

      & > h2::before {
        content: "";
        position: absolute;
        left: -30px;
        top: 50%;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: ${theme.accent};
        transform: translateY(-50%);
      }

      & > p {
        font-size: clamp(1rem, 1.5vw, 2rem);
      }

      & > div {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      }
    }

    @media only screen and (max-width: 750px) {
      /* min-height: 80vh; */
      padding: 8rem 0rem;
    }

    @media only screen and (min-width: 1750px) {
      padding: 15rem 0rem;
    }
  `
);

export const StyledSectionFour = styled.section(
  ({ theme }) => css`
    min-height: 100vh;

    & > h2 {
      z-index: 4;
      position: relative;
      text-align: center;
      background-color: ${theme.accent};
      color: ${theme.primary};
      width: max-content;
      margin: 0 auto;
      padding: 0.5rem;
      border-radius: 5px;
      font-size: clamp(3rem, 4vw, 5rem);
    }

    & > .experiencesContainer {
      margin: 3rem auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 6rem;
      padding: 0rem 2rem;

      & > .experienceCard {
        width: 22rem;
        background-color: ${theme.isDark ? theme.secondary : theme.primary};
        border-radius: 20px;
        padding: 0.8rem;
        box-shadow: ${theme.isDark
          ? "none"
          : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"};

        & > fieldset {
          border: 1px solid ${theme.accent};
          border-radius: 5px;
          height: 100%;

          & > legend {
            padding: 0px 6px;
            color: ${theme.accent};
          }

          & > img {
            width: 100%;
            -webkit-filter: grayscale(100%);
            filter: grayscale(100%);
            border-radius: 5px;
            height: 160px;
            object-fit: cover;
          }

          & > span {
            border-bottom: 1px solid ${theme.accent};
            width: 100%;
            display: block;
            margin: 8px 0;
          }

          & > p {
            font-size: 14px;
          }
        }
      }
    }

    @media only screen and (max-width: 750px) {
      & > .experiencesContainer {
        gap: 3rem;

        & > .experienceCard {
          & > fieldset {
            & > img {
              height: 130px;
            }

            & > p {
              font-size: 12px;
            }
          }
        }
      }
    }

    @media only screen and (min-width: 1750px) {
      & > .experiencesContainer {
        gap: 8rem;

        & > .experienceCard {
          width: 32rem;

          & > fieldset {
            & > legend {
              font-size: 22px;
            }

            & > img {
              height: 200px;
            }

            & > h3 {
              font-size: 32px;
            }
            & > h4 {
              font-size: 28px;
            }

            & > p {
              font-size: 20px;
            }
          }
        }
      }
    }
  `
);
