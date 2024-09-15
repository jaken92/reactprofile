import styled, { css } from "styled-components";
import { InfoCardProps } from "./InfoCard.types";

interface StyledInfoCardProps {
  large?: boolean;
}

export const StyledInfoCard = styled.div<StyledInfoCardProps>(
  ({ theme, large }) => css`
    width: ${large ? "32rem" : "22rem"};
    background-color: ${theme.isDark ? theme.gray : theme.black};
    border-radius: 20px;
    padding: 0.8rem;
    box-shadow: ${theme.isDark
      ? "none"
      : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"};

    & > fieldset {
      border: 1px solid ${theme.aqua};
      border-radius: 5px;
      min-height: ${large ? "40rem" : "100%"};

      & > legend {
        padding: 0px 6px;
        color: ${theme.aqua};
        text-transform: uppercase;
      }

      & > img {
        width: 100%;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        border-radius: 5px;
        height: ${large ? "300px" : "160px"};
        object-fit: cover;
      }

      & > span {
        border-bottom: 1px solid ${theme.aqua};
        width: 100%;
        display: block;
        margin: 8px 0;
      }

      & > p {
        font-size: ${large ? "18px" : "14px"};
      }

      & > h3 {
        font-size: ${large ? "24px" : "18px"};
      }

      & > h4 {
        font-size: ${large ? "22px" : "16px"};
      }
    }

    @media only screen and (min-width: 1750px) {
      width: ${large ? "45rem" : "32rem"};

      & > fieldset {
        min-height: ${large ? "55rem" : "100%"};
        & > legend {
          font-size: 22px;
        }

        & > img {
          height: ${large ? "400px" : "200px"};
        }

        & > h3 {
          font-size: 32px;
        }
        & > h4 {
          font-size: 28px;
        }

        & > p {
          font-size: ${large ? "24px" : "20px"};
        }
      }
    }

    @media only screen and (max-width: 750px) {
      width: 22rem;
      & > fieldset {
        min-height: ${large ? "490px" : "100%"};

        & > img {
          height: 160px;
        }

        & > p {
          font-size: 12px;
        }

        & > h3 {
          font-size: 18px;
        }

        & > h4 {
          font-size: 16px;
        }
      }
    }
  `
);

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
