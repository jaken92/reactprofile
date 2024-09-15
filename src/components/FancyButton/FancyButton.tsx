import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFancyButton = styled.button<FancyButtonProps>(
  ({ color, theme }) => css`
    border: 2px solid ${color ? color : theme.aqua};
    font-size: 1rem;
    background-color: transparent;
    color: ${color ? color : theme.aqua};
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 8px;
    transition: left 2s ease;

    &:hover {
      background-color: ${color ? color : theme.aqua};
      color: ${color ? color : theme.black};
    }
  `
);

interface FancyButtonProps {
  color?: string;
  text: string;
  to: string;
}

export const FancyButton: React.FC<FancyButtonProps> = ({
  text,
  color,
  to,
}) => {
  return (
    <>
      <Link to={to}>
        <StyledFancyButton to={to} color={color} text={text}>
          {text}
        </StyledFancyButton>
      </Link>
    </>
  );
};
