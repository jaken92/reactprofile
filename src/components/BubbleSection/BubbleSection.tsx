import styled, { useTheme } from "styled-components";
import { useWindowResize } from "../../hooks/useWindowResize";
import { FancyButton } from "../FancyButton";
import profilePic from "../../assets/images/pj.png";
import yrgoImg from "../../assets/images/yrgo2.png";
import ericssonImg from "../../assets/images/ericsson2.png";

const StyledBubbleSection = styled.section`
  background-color: ${(props) => props.theme.black};
  position: relative;
  overflow: hidden;
  grid-column: 1 / span 2;
  font-family: system-ui, sans-serif;
  /* outline: 2px solid black; */
  min-height: 200vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* outline: 2px solid ${(props) => props.theme.text}; */

  & > .sectionThree {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    & > div {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    & > .card {
      /* height: 30rem; */
      width: 50%;
      /* background-color: ${(props) => props.theme.primary}; */
      z-index: 2;
      box-shadow: none;
      /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
      display: flex;
      gap: 1rem;
      flex-direction: column;
      justify-content: center;

      & > h2 {
        position: relative;
        font-size: 36px;
      }

      & > h2::before {
        content: "";
        position: absolute;
        /* background: url(${profilePic});
      background-size: cover; */
        left: -30px;
        top: 50%;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.aqua};
        transform: translateY(-50%);
      }
    }
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

  @keyframes pulsate {
    0%,
    100% {
      transform: scale(1);
    }
    2% {
      transform: scale(1);
    }
    5% {
      transform: scale(1.2);
    }
    7% {
      transform: scale(1);
    }
  }
`;

export const BubbleSection: React.FC = () => {
  const theme = useTheme();
  const windowWidth = useWindowResize();

  interface Bubbles {
    size: number;
    color: string;
    insetY: number;
    insetX: number;
  }

  const bubbles: Bubbles[] = [
    {
      size: 12,
      color: theme.aqua,
      insetX: -4,
      insetY: 11,
    },
    {
      size: 15,
      color: theme.aqua,
      insetX: 11,
      insetY: 10,
    },
    {
      size: 16,
      color: theme.text,
      insetX: 3,
      insetY: 15,
    },
    {
      size: 18,
      color: theme.aqua,
      insetX: 15,
      insetY: -6,
    },
    {
      size: 8,
      color: theme.text,
      insetX: 12,
      insetY: 7,
    },
    {
      size: 11,
      color: theme.text,
      insetX: 8,
      insetY: -3,
    },
    {
      size: 2,
      color: theme.aqua,
      insetX: 2.5,
      insetY: 29,
    },

    {
      size: 17,
      color: theme.text,
      insetX: 0.1,
      insetY: 0.1,
    },
    {
      size: 15,
      color: theme.aqua,
      insetX: -5,
      insetY: -7,
    },
  ];

  const BubbleMaker = (
    sideX: "left" | "right",
    sideY: "top" | "bottom"
  ): JSX.Element[] => {
    const renderedBubbles = bubbles.map((bubble) => {
      const animationDelay = Math.floor(Math.random() * 11);

      const styling: React.CSSProperties = {
        height:
          (windowWidth > 800 ? bubble.size * 0.8 : bubble.size * 0.5) + "rem",
        width:
          (windowWidth > 800 ? bubble.size * 0.8 : bubble.size * 0.5) + "rem",
        position: "absolute",
        // backgroundColor: bubble.color,
        borderRadius: "50%",
        opacity: "1",
        animation: `pulsate 10s ease-in-out ${animationDelay}s infinite`,
        border: `2px solid ${theme.aqua}`,
      };

      styling[sideX] =
        (windowWidth > 800 ? bubble.insetX : bubble.insetX * 0.5) + "rem";
      styling[sideY] =
        (windowWidth > 800 ? bubble.insetY : bubble.insetY * 0.5) + "rem";

      return <div style={styling}></div>;
    });

    return renderedBubbles;
  };

  const renderedTopBubbles = BubbleMaker("left", "top");
  const renderedBottomBubbles = BubbleMaker("right", "bottom");
  return (
    <StyledBubbleSection>
      <section className="sectionThree">
        <div className="card">
          <h2>My name is Petter Jakobsson.</h2>
          <p>
            {/* This is a place where you can read about me, see some of the work i
          do, and watch me goof around with some animations or trying out
          different concepts in the Playground. */}
            I am a webdeveloper based in Gothenburg, Sweden. I do fullstack
            development and have a experience with many languages and
            frameworks. My strongest skillset lies in Javascript and frameworks
            such as React and NodeJS.
          </p>
          <div>
            <FancyButton></FancyButton>
          </div>
        </div>
      </section>

      <section className="sectionFour">
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
      </section>
      {renderedTopBubbles}
      {renderedBottomBubbles}
    </StyledBubbleSection>
  );
};
