import styled from "styled-components";

export const StyledLayout = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  transition: "background-color 0.3s , color 0.3s , filter 0.3s ";
`;

export const StyledHeader = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 1rem;
  font-family: system-ui, sans-serif;
  font-weight: normal;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 99;
  border-bottom: 1px solid ${(props) => props.theme.secondary};

  .logo {
    height: 30px;
    width: 30px;
    background-color: ${(props) => props.theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.accent};
    border-radius: 50%;
    font-weight: 900;
    font-size: 24px;
    border: 1px solid ${(props) => props.theme.accent};
    position: relative;

    text-decoration: none;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      height: 40px;
      width: 40px;
      border-radius: 50%;
      border: 1px solid ${(props) => props.theme.accent};
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      height: 50px;
      width: 50px;
      border-radius: 50%;
      border: 1px solid ${(props) => props.theme.accent};
    }

    & > P {
      position: relative;
    }
    & > p::after {
      content: "";
      position: absolute;
      top: -9px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;

      height: 15px;
      width: 10px;
      background-color: ${(props) => props.theme.primary};
    }

    & > p::before {
      content: "";
      position: absolute;
      bottom: -9px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 9999;

      height: 15px;
      width: 10px;
      background-color: ${(props) => props.theme.primary};
    }
  }

  & > nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    & > .navMenu {
      display: flex;
      justify-content: space-around;
      gap: 1rem;
      transition: left 0.3s ease; // Add transition

      & > a {
        text-decoration: none;
        color: ${(props) => props.theme.text};
        position: relative;
        font-weight: 600;
      }

      & > a::before {
        content: "";
        position: absolute;
        width: 100%;
        background-color: ${(props) => props.theme.accent};
        height: 3px;
        width: 0%;
        top: -3px;
        right: 0px;
        transition: 0.5s;
      }

      & > a::after {
        content: "";
        position: absolute;
        width: 100%;
        background-color: ${(props) => props.theme.accent};
        height: 3px;
        width: 0%;
        bottom: -3px;
        left: 0px;
        transition: 0.5s;
      }

      & > a:hover:after,
      a:hover:before {
        width: 100%;
      }

      & > a.active {
        font-weight: 600;
      }
    }

    & > .hamburger {
      width: 30px;
      height: 30px;
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      display: none;

      & > span {
        width: 20px;
        height: 2px;
        background-color: ${(props) => props.theme.text};
        position: relative;
        transition: 0.1s ease;
      }

      & > span::before,
      & > span::after {
        width: 20px;
        height: 2px;
        background-color: ${(props) => props.theme.text};
        position: absolute;
        content: "";
        transition: 0.3s ease;
      }

      & > span::before {
        top: -5px;
      }

      & > span::after {
        bottom: -5px;
      }
    }

    & > .hamburger.active {
      & > span {
        visibility: hidden;
      }

      & > span::before {
        visibility: visible;
        top: 0px;
        transform: rotate(45deg);
      }

      & > span::after {
        visibility: visible;
        bottom: 0px;
        transform: rotate(-45deg);
      }
    }

    @media screen and (max-width: 750px) {
      & > .hamburger {
        display: flex;
      }

      & > .navMenu {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 20vh;
        align-items: center;
        font-size: 32px;
        height: 100vh;
        width: 100%;
        left: -100%;
        top: 62px;
        background-color: ${(props) => props.theme.primary};
      }

      & > .navMenu.active {
        left: 0%;
      }

      & > .navMenu.active {
        left: 0px;
      }
    }
  }
`;
