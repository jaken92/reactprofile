import styled, { css } from "styled-components";
import smallSliderImg from "../../assets/images/techsliderLightSmall.png";
import bigSliderImg from "../../assets/images/techsliderLightBig.png";
import { BubbleSection } from "../../components/BubbleSection";
import yrgoImg from "../../assets/images/yrgo2.png";
import ericssonImg from "../../assets/images/ericsson2.png";
import { FancyButton } from "../../components/FancyButton";
import { InfoCard, InfoCardData } from "../../components/InfoCard";
import { Link } from "react-router-dom";

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
        color: ${theme.white};
        font-size: clamp(3rem, 4vw + 1rem, 6rem);
        text-align: center;
        line-height: normal;

        & > span {
          color: ${theme.aqua};
          text-shadow: 0.5px 0.5px 3px ${theme.aqua};
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
          background-color: ${theme.black};
          animation: typewriter 5.5s steps(37) 1s forwards;
        }

        &::after {
          width: 0.08em;
          background-color: ${theme.white};
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
        border-bottom: 1px solid ${theme.aqua};
        border-top: 1px solid ${theme.aqua};

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
      border-top: 1px solid ${theme.gray};
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
        color: ${theme.white};
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
          border-bottom: 1px solid ${theme.aqua};
          border-top: 1px solid ${theme.aqua};

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

const StyledSectionThree = styled.section(
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
        background-color: ${theme.aqua};
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

const StyledSectionFour = styled.section(
  ({ theme }) => css`
    min-height: 100vh;

    & > h2 {
      z-index: 4;
      position: relative;
      text-align: center;
      background-color: ${theme.aqua};
      color: ${theme.black};
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
        background-color: ${theme.isDark ? theme.gray : theme.black};
        border-radius: 20px;
        padding: 0.8rem;
        box-shadow: ${theme.isDark
          ? "none"
          : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"};

        & > fieldset {
          border: 1px solid ${theme.aqua};
          border-radius: 5px;
          height: 100%;

          & > legend {
            padding: 0px 6px;
            color: ${theme.aqua};
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
            border-bottom: 1px solid ${theme.aqua};
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

const infoCards: InfoCardData[] = [
  {
    legend: "Yrgo",
    img: yrgoImg,
    title: "Yrgo Web Development",
    secondTitle: "Type: Education",
    thirdTitle: "Duration: 2022/08 - 2024-06",
    text: "Program directed towards becoming a fullstack developer. Working in teambased environment with other developers and digital designers to create web applications. Using tech such as SQLite, PHP, Laravel, React, Typescript, Supabase, nextJS, Wordpress and Hydrogen. The program concluded with 6-months of hands on practics at a company within the industry.",
  },
  {
    legend: "Ericsson",
    img: ericssonImg,
    title: "Ericsson",
    secondTitle: "Type: Internship/Work",
    thirdTitle: "Duration: 2023/11 - Present",
    text: "Part of Ericsson's STS-automation team, developing web applications for internal use. I've worked with technologies like React, Node.js, TypeScript, MongoDB, MySQL, and Grafana. In addition to extensive coding, I've gained valuable experience in agile practices, holding presentations, and being a collaborative and productive team member.",
  },
];

export const Home = () => {
  const renderedInfoCards = infoCards.map((infoCard) => {
    return (
      <>
        <InfoCard cardContent={infoCard} />
      </>
    );
  });

  return (
    <StyledMain>
      <section className="sectionOne">
        <h1>
          Welcome to my <br /> <span>website!</span>
        </h1>
        <h2 className="twText">I am a developer based in Gothenburg.</h2>
      </section>
      <section className="sectionTwo">
        <div className="sliderContainer">
          <div className="slider"></div>
        </div>
      </section>
      <BubbleSection>
        <StyledSectionThree>
          <div>
            <h2>My name is Petter Jakobsson.</h2>
            <p>
              I'm a full-stack web developer based in Gothenburg, Sweden, with
              experience across a range of languages and frameworks. My main
              focus is JavaScript, and I particularly enjoy working with React,
              TypeScript, and Styled Components. Currently, I’m part of an
              automation team at Ericsson, where we develop web applications
              that help streamline workflows and improve productivity.
              <br />
              Outside of technology, i like to spend time with my girlfriend and
              my dog, taking walks in the nature and exploring new places.
            </p>
            <div>
              <FancyButton to="/contact" text={"Contact"}></FancyButton>
              <FancyButton
                to="https://www.linkedin.com/in/petter-jakobsson-63a009273/"
                text={"Linked-in →"}></FancyButton>
              <FancyButton
                to="https://github.com/jaken92"
                text={"Github →"}></FancyButton>
            </div>
          </div>
        </StyledSectionThree>
        <StyledSectionFour>
          <h2>Experience</h2>
          <div className="experiencesContainer">{renderedInfoCards}</div>
        </StyledSectionFour>
      </BubbleSection>
      <div className="footer">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://www.linkedin.com/in/petter-jakobsson-63a009273/">
          Github
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://www.linkedin.com/in/petter-jakobsson-63a009273/">
          Linked-in
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://www.linkedin.com/in/petter-jakobsson-63a009273/">
          Contact
        </Link>
      </div>
    </StyledMain>
  );
};
