import styled, { css } from "styled-components";
import { InfoCardProps } from "./InfoCard.types";

interface StyledInfoCardProps {
  wide?: boolean;
}

export const StyledInfoCard = styled.div<StyledInfoCardProps>(
  ({ theme, wide }) => css`
    width: ${wide ? "46rem" : "22rem"};
    background-color: ${theme.isDark ? theme.gray : theme.black};
    border-radius: 20px;
    padding: 0.8rem;
    box-shadow: ${theme.isDark
      ? "none"
      : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"};

    & > fieldset {
      border: 1px solid ${theme.aqua};
      border-radius: 5px;
      height: 100%;

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
        height: ${wide ? "300px" : "160px"};
        object-fit: cover;
      }

      & > span {
        border-bottom: 1px solid ${theme.aqua};
        width: 100%;
        display: block;
        margin: 8px 0;
      }

      & > p {
        font-size: 14px;
      }
    }

    @media only screen and (min-width: 1750px) {
      width: ${wide ? "52rem" : "32rem"};

      & > fieldset {
        & > legend {
          font-size: 22px;
        }

        & > img {
          height: ${wide ? "400px" : "200px"};
        }

        & > h3 {
          font-size: 32px;
        }
        & > h4 {
          font-size: 28px;
        }

        & > p {
          font-size: 20px;
        }
      }
    }

    @media only screen and (max-width: 750px) {
      & > fieldset {
        & > img {
        }

        & > p {
          font-size: 12px;
        }
      }
    }
  `
);

export const InfoCard: React.FC<InfoCardProps> = ({ cardContent, wide }) => {
  return (
    <StyledInfoCard wide={wide}>
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
