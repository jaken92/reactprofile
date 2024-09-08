import styled from "styled-components";

const StyledFancyButton = styled.button`
  outline: 2px solid ${(props) => props.theme.aqua};
  background-color: transparent;
  color: ${(props) => props.theme.aqua};
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 8px;
  border: none;
  transition: left 2s ease;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.aqua};
    color: ${(props) => props.theme.black};
  }
`;

export const FancyButton = () => {
  return (
    <>
      <StyledFancyButton>Contact</StyledFancyButton>
    </>
  );
};
