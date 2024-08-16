import styled from "styled-components";

export const StyledLayout = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; */
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
`;

export const StyledNav = styled.nav`
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  gap: 2rem;
  padding: 1rem;
`;
