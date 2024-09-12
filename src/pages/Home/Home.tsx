import styled from "styled-components";
import smallSliderImg from "../../assets/images/techsliderLightSmall.png";
import bigSliderImg from "../../assets/images/techsliderLightBig.png";
import { BubbleSection } from "../../components/BubbleSection";
import yrgoImg from "../../assets/images/yrgo2.png";
import ericssonImg from "../../assets/images/ericsson2.png";
import { FancyButton } from "../../components/FancyButton";

export const StyledMain = styled.main`
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

    & > h1 {
      color: ${(props) => props.theme.white};
      font-size: 3.75rem;
      text-align: center;
      line-height: normal;

      & > span {
        color: ${(props) => props.theme.aqua};
        text-shadow: 0.5px 0.5px 3px ${(props) => props.theme.aqua};
      }
    }

    & > h3 {
      font-size: 2.5rem;
      background-image: linear-gradient(90deg, #00ff5e, #00ff8c);
      color: gray;
      background-clip: text;
      background-size: 0% 100%;
      background-repeat: no-repeat;
      animation: reveal 2s ease 6s forwards;

      @keyframes reveal {
        to {
          background-size: 100% 100%;
          background-image: linear-gradient(90deg, #00eeff, #00ff8c);
          color: transparent;
        }
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
        background-color: ${(props) => props.theme.black};
        animation: typewriter 5.5s steps(49) 1s forwards;
      }

      &::after {
        width: 0.08em;
        background-color: ${(props) => props.theme.white};
        animation: typewriter 5.5s steps(49) 1s forwards,
          blink 750ms steps(49) infinite;
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
      border-bottom: 1px solid ${(props) => props.theme.aqua};
      border-top: 1px solid ${(props) => props.theme.aqua};
      /* background-color: ${(props) =>
        props.theme.isDark ? props.theme.black : props.theme.aqua}; */

      & > .slider {
        background: url(${bigSliderImg}) repeat-x;
        width: 4719px; /* img width times 3*/
        height: 265px; /*img height*/
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
    border-top: 1px solid ${(props) => props.theme.gray};
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
      color: ${(props) => props.theme.white};
      position: relative;
    }

    & > a:hover {
      color: ${(props) => props.theme.hover};
    }
  }

  //* Media Queryies *//

  @media only screen and (max-width: 750px) {
    & > .sectionTwo {
      & > .sliderContainer {
        overflow: hidden;
        width: 100%;
        border-bottom: 1px solid ${(props) => props.theme.aqua};
        border-top: 1px solid ${(props) => props.theme.aqua};

        & > .slider {
          background: url(${smallSliderImg}) repeat-x;
          width: 3276px; /* img width times 3*/
          height: 174px; /*img height*/
          animation: roll 10s linear infinite;
        }
        @keyframes roll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-1092px, 0, 0); /* img width */
          }
        }
      }
    }
  }
`;

const StyledSectionThree = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 95vh;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 60%;

    & > h2 {
      position: relative;
      font-size: clamp(1.5rem, 3vw + 0.5rem, 5rem);
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
      background-color: ${(props) => props.theme.aqua};
      transform: translateY(-50%);
    }

    & > p {
      font-size: clamp(1rem, 1.5vw, 2rem);
    }
  }
`;

const StyledSectionFour = styled.section`
  min-height: 100vh;
  & > h2 {
    text-align: center;
    background-color: ${(props) => props.theme.aqua};
    color: ${(props) => props.theme.black};
    width: max-content;
    margin: 0 auto;
    padding: 0.5rem;
    border-radius: 5px;
    font-size: clamp(3rem, 5vw, 8rem);
  }

  & > .experiencesContainer {
    margin: 3rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;
    padding: 0rem 2rem;

    & > .experienceCard {
      width: 22rem;
      background-color: ${(props) =>
        props.theme.isDark ? props.theme.gray : props.theme.black};
      border-radius: 20px;
      padding: 0.8rem;
      box-shadow: ${(props) =>
        props.theme.isDark
          ? "none"
          : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"};

      & > fieldset {
        border: 1px solid ${(props) => props.theme.aqua};
        border-radius: 5px;
        height: 100%;

        & > legend {
          padding: 0px 6px;
          color: ${(props) => props.theme.aqua};
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
          border-bottom: 1px solid ${(props) => props.theme.aqua};
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

  @media only screen and (max-width: 390px) {
    & > .experiencesContainer > .experienceCard > fieldset > p {
      font-size: 12px;
    }
  }

  @media only screen and (min-width: 1600px) {
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
    /* & > .experiencesContainer > .experienceCard > fieldset > p {
      font-size: 20px;
    } */
  }
`;
export const Home = () => {
  return (
    <StyledMain>
      <section className="sectionOne">
        <h1>
          Welcome to my <br /> <span>website!</span>
        </h1>
        {/* <h2 className="twText">My name is Petter Jakobsson.</h2> */}
        <h2 className="twText">
          I am a web developer based in Gothenburg, Sweden.
        </h2>
        {/* <h3>I am a web developer based in Gothenburgh, Sweden.</h3> */}
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
              I am a webdeveloper based in Gothenburg, Sweden. I do fullstack
              development and have a experience with various languages and
              frameworks. My strongest skillset lies in Javascript and
              frameworks such as React and NodeJS. Currently working in an
              automation team at Ericsson, develop web applications for internal
              use.
            </p>
            <div>
              <FancyButton></FancyButton>
            </div>
          </div>
        </StyledSectionThree>
        <StyledSectionFour>
          <h2>Experience</h2>
          <div className="experiencesContainer">
            <div className="experienceCard">
              <fieldset>
                <legend>YRGO</legend>
                <img src={yrgoImg} alt="" />
                <h3>Yrgo Web Development</h3>
                <h4>Type: Education</h4>
                <h4>Duration: 2022/08 - 2024-06</h4>
                <span></span>
                <p>
                  Program directed towards becoming a fullstack developer.
                  Working in teambased environment with other developers and
                  digital designers to create web applications. Using tech such
                  as SQLite, PHP, Laravel, React, Typescript, Supabase, nextJS,
                  Wordpress and Hydrogen. The program concluded with 6-months of
                  hands on practics at a company within the industry.
                </p>
              </fieldset>
            </div>
            <div className="experienceCard">
              <fieldset>
                <legend>ERICSSON</legend>
                <img src={ericssonImg} alt="" />
                <h3>Ericsson</h3>
                <h4>Type: Internship/Work</h4>
                <h4>Duration: 2023/11 - Present</h4>
                <span></span>
                <p>
                  Program directed towards becoming a fullstack developer.
                  Working in teambased environment with other developers and
                  digital designers to create web applications. Using tech such
                  as SQLite, PHP, Laravel, React, Typescript, Supabase, nextJS,
                  Wordpress and Hydrogen. The program concluded with 6-months of
                  hands on practics at a company within the industry.
                </p>
              </fieldset>
            </div>
          </div>
        </StyledSectionFour>
      </BubbleSection>
      <div className="footer">
        <a href="">Github</a>
        <a href="">Linked-in</a>
        <a href="">Blog</a>
      </div>
    </StyledMain>
  );
};
