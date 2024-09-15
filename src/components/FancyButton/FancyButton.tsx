import { Link } from "react-router-dom";
import { StyledFancyButton } from "./FancyButton.styles";
import { FancyButtonProps } from "./FancyButton.types";

export const FancyButton: React.FC<FancyButtonProps> = ({
  text,
  color,
  to,
}) => {
  return (
    <>
      <Link target="_blank" rel="noopener noreferrer" to={to}>
        <StyledFancyButton to={to} color={color} text={text}>
          {text}
        </StyledFancyButton>
      </Link>
    </>
  );
};
