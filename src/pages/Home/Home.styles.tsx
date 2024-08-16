import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text}; */
  /* height: 100vh; */

  & > h1 {
    font-size: clamp(1.5rem, 3vw, 4rem);
    font-weight: 500;
    position: relative;
    /* outline: 2px solid red; */
    margin-top: 2rem;
  }

  & > h1::before,
  h1::after {
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
  }

  & > h1::before {
    background-color: ${(props) => props.theme.primary};
    animation: typewriter 5s steps(35) 1s forwards;
  }

  & > h1::after {
    width: 0.08em;
    background-color: ${(props) => props.theme.text};
    animation: typewriter 5s steps(35) 1s forwards,
      blink 750ms steps(35) infinite;
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
`;
