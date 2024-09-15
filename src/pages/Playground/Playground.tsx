//todo: create playground
// not in use.

import styled from "styled-components";
import { BubbleSection } from "../../components/BubbleSection";
import pj from "../../assets/images/pj.png";
import { StyledMain } from "./Playground.styles";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh 100vh 100vh;

  & > div {
    background-color: ${(props) => props.theme.accent};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    outline: 2px solid ${(props) => props.theme.text};

    & > img {
      object-fit: cover;
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
      border: 3px solid ${(props) => props.theme.secondary};
      /* animation: typewriter 5s steps(35) 1s forwards,
        blink 750ms steps(35) infinite; */
      animation: pulsate 15s ease-in-out infinite;
    }
  }

  & > div.bubbleSection {
    background-color: ${(props) => props.theme.primary};
    position: relative;
    overflow: hidden;
    grid-column: 1 / span 2;
    font-family: system-ui, sans-serif;

    & > div {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }

    & > .card {
      height: 30rem;
      width: 25rem;
      /* background-color: ${(props) => props.theme.primary}; */
      z-index: 2;
      box-shadow: none;
      /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
      display: flex;
      flex-direction: column;
      justify-content: center;
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

export const Playground = () => {
  return (
    <StyledGrid>
      <StyledMain>
        <h1>Hello, my name is Petter Jakobsson. </h1>
      </StyledMain>
      <div>
        <img src={pj} alt="" />
      </div>
      <BubbleSection></BubbleSection>
    </StyledGrid>
  );
};
