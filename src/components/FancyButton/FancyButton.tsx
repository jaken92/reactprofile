import { Link } from "react-router-dom";
import { FancyButtonProps } from "./FancyButton.types";
import { StyledFancyButton } from "./FancyButton.styles";

export const FancyButton: React.FC<FancyButtonProps> = ({
  text,
  color,
  to,
}) => {
  return (
    <>
      <Link target="_blank" rel="noopener noreferrer" to={to}>
        <StyledFancyButton color={color}>{text}</StyledFancyButton>
      </Link>
    </>
  );
};
