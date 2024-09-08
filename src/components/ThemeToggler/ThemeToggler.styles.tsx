import styled from "styled-components";

export const StyledToggleButton = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  & > button {
    background-color: linear-gradient(145deg, #ffffff, #e6e6e6);
    width: 40px;
    height: 25px;
    border-radius: 50px;
    border: 2px solid black;
    position: relative;
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
  }

  & > button:hover {
    cursor: pointer;
  }

  & > button::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5%;
    height: 17px;
    width: 17px;
    border-radius: 50%;
    background-color: darkgray;
    transition: left 0.2s ease;
    box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.2);
    outline: 1px solid black;
  }

  & > .toggled::after {
    left: calc(95% - 17px);
  }

  @media screen and (max-width: 800px) {
    scale: 0.8;
  }
`;
