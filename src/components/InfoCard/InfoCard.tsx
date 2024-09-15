import { InfoCardProps } from "./InfoCard.types";
import { StyledInfoCard } from "./InfoCard.styles";

export const InfoCard: React.FC<InfoCardProps> = ({ cardContent, large }) => {
  return (
    <StyledInfoCard large={large}>
      <fieldset>
        <legend>{cardContent.legend}</legend>
        <img src={cardContent.img} alt={`picture of ${cardContent.title}`} />
        <h3>{cardContent.title}</h3>
        <h4>{cardContent.secondTitle}</h4>
        <h4>{cardContent.thirdTitle}</h4>
        <span></span>
        <p>{cardContent.text}</p>
      </fieldset>
    </StyledInfoCard>
  );
};
