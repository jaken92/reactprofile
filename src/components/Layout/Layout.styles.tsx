import styled from "styled-components";

export const StyledLayout = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; */
  background-color: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  min-height: 100vh;
  transition: "background-color 0.3s , color 0.3s , filter 0.3s ";
  /* z-index: 10; */
`;
