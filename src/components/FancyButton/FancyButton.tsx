import styled from "styled-components";

const StyledFancyButton = styled.button`
  border: 2px solid ${(props) => props.theme.aqua};
  font-size: 1rem;
  background-color: transparent;
  color: ${(props) => props.theme.aqua};
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 8px;
  transition: left 2s ease;

  &:hover {
    background-color: ${(props) => props.theme.aqua};
    color: ${(props) => props.theme.black};
  }

  /* &:focus {
    box-shadow: 0.5px 0.5px 3px ${(props) => props.theme.aqua};
    outline: default;
  } */
`;

export const FancyButton = () => {
  return (
    <>
      <StyledFancyButton>Contact</StyledFancyButton>
    </>
  );
};
