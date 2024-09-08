import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primary};

  & > h1 {
    font-size: clamp(0.5rem, 1vw + 0.8rem, 4rem);
    font-weight: 500;
    position: relative;
    /* outline: 2px solid red; */
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
