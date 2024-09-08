import styled from "styled-components";
import smallSliderImg from "../../assets/images/techsliderLightSmall.png";
import bigSliderImg from "../../assets/images/techsliderLightBig.png";
import { BubbleSection } from "../../components/BubbleSection";
import yrgoImg from "../../assets/images/yrgo2.png";
import ericssonImg from "../../assets/images/ericsson2.png";

export const StyledMain = styled.main`
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
        background-color: ${(props) => props.theme.primary};
        animation: typewriter 5.5s steps(50) 1s forwards;
      }

      &::after {
        width: 0.08em;
        background-color: ${(props) => props.theme.white};
        animation: typewriter 5.5s steps(50) 1s forwards,
          blink 750ms steps(50) infinite;
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

  & > .sectionThree {
    min-height: 100vh;
  }

  & > .sectionFour {
    /* border-top: 1px solid ${(props) => props.theme.aqua}; */
    min-height: 100vh;

    padding: 3rem;

    & > h2 {
      text-align: center;
      background-color: ${(props) => props.theme.aqua};
      color: ${(props) => props.theme.black};
      width: max-content;
      margin: 0 auto;
      padding: 0.5rem;
      border-radius: 5px;
      font-size: 3rem;
    }

    & > .experiencesContainer {
      /* border: 1px solid ${(props) => props.theme.aqua}; */
      /* background-color: ${(props) => props.theme.gray}; */
      margin: 5rem auto;
      display: flex;
      justify-content: center;
      gap: 3rem;

      & > .experienceCard {
        width: 25rem;
        height: 35rem;
        background-color: ${(props) => props.theme.gray};
        border-radius: 20px;
        /* border: 5px solid ${(props) => props.theme.aqua}; */
        padding: 0.8rem;

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
  }

  & > .footer {
    border-top: 1px solid ${(props) => props.theme.aqua};
    min-height: 30vh;
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

export const Home = () => {
  return (
    <StyledMain>
      <section className="sectionOne">
        <h1>
          Welcome to my <br /> <span>website!</span>
        </h1>
        {/* <h2 className="twText">My name is Petter Jakobsson.</h2> */}
        <h2 className="twText">
          I am a web developer based in Gothenburgh, Sweden.
        </h2>
        {/* <h3>I am a web developer based in Gothenburgh, Sweden.</h3> */}
      </section>
      <section className="sectionTwo">
        <div className="sliderContainer">
          <div className="slider"></div>
        </div>
      </section>
      <BubbleSection></BubbleSection>
      {/* <section className="sectionThree">
        
      </section> */}
      {/* <section className="sectionFour">
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
                Program directed towards becoming a fullstack developer. Working
                in teambased environment with other developers and digital
                designers to create web applications. Using tech such as SQLite,
                PHP, Laravel, React, Typescript, Supabase, nextJS, Wordpress and
                Hydrogen. The program concluded with 6-months of hands on
                practics at a company within the industry.
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
                Program directed towards becoming a fullstack developer. Working
                in teambased environment with other developers and digital
                designers to create web applications. Using tech such as SQLite,
                PHP, Laravel, React, Typescript, Supabase, nextJS, Wordpress and
                Hydrogen. The program concluded with 6-months of hands on
                practics at a company within the industry.
              </p>
            </fieldset>
          </div>
        </div>
      </section> */}
      <div className="footer"></div>
    </StyledMain>
  );
};
