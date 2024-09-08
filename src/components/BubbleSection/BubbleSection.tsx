import styled, { useTheme } from "styled-components";
import { useWindowResize } from "../../hooks/useWindowResize";

const StyledBubbleSection = styled.section`
  background-color: ${(props) => props.theme.black};
  position: relative;
  overflow: hidden;
  font-family: system-ui, sans-serif;
  /* z-index: 1; */

  & > .contentWrapper {
    z-index: 200 !important;
  }

  @keyframes pulsate {
    0%,
    100% {
      transform: scale(1);
    }
    2% {
      transform: scale(1);
    }
    5% {
      transform: scale(1.2);
    }
    7% {
      transform: scale(1);
    }
  }
`;

interface BubbleSectionProps {
  children?: React.ReactNode;
}

export const BubbleSection: React.FC<BubbleSectionProps> = ({ children }) => {
  const theme = useTheme();
  const windowWidth = useWindowResize();

  interface Bubbles {
    size: number;
    color: string;
    insetY: number;
    insetX: number;
  }

  const bubbles: Bubbles[] = [
    {
      size: 12,
      color: theme.aqua,
      insetX: -4,
      insetY: 11,
    },
    {
      size: 15,
      color: theme.aqua,
      insetX: 11,
      insetY: 10,
    },
    {
      size: 16,
      color: theme.text,
      insetX: 3,
      insetY: 15,
    },
    {
      size: 18,
      color: theme.aqua,
      insetX: 15,
      insetY: -6,
    },
    {
      size: 8,
      color: theme.text,
      insetX: 12,
      insetY: 7,
    },
    {
      size: 11,
      color: theme.text,
      insetX: 8,
      insetY: -3,
    },
    {
      size: 2,
      color: theme.aqua,
      insetX: 2.5,
      insetY: 29,
    },

    {
      size: 17,
      color: theme.text,
      insetX: 0.1,
      insetY: 0.1,
    },
    {
      size: 15,
      color: theme.aqua,
      insetX: -5,
      insetY: -7,
    },
  ];

  const BubbleMaker = (
    sideX: "left" | "right",
    sideY: "top" | "bottom"
  ): JSX.Element[] => {
    const renderedBubbles = bubbles.map((bubble) => {
      const animationDelay = Math.floor(Math.random() * 11);

      const styling: React.CSSProperties = {
        height:
          (windowWidth > 800 ? bubble.size * 0.8 : bubble.size * 0.5) + "rem",
        width:
          (windowWidth > 800 ? bubble.size * 0.8 : bubble.size * 0.5) + "rem",
        position: "absolute",
        // backgroundColor: bubble.color,
        borderRadius: "50%",
        opacity: "1",
        animation: `pulsate 10s ease-in-out ${animationDelay}s infinite`,
        border: `2px solid ${theme.aqua}`,
        // zIndex: "1",
      };

      styling[sideX] =
        (windowWidth > 800 ? bubble.insetX : bubble.insetX * 0.5) + "rem";
      styling[sideY] =
        (windowWidth > 800 ? bubble.insetY : bubble.insetY * 0.5) + "rem";

      return <div style={styling}></div>;
    });

    return renderedBubbles;
  };

  const renderedTopBubbles = BubbleMaker("left", "top");
  const renderedBottomBubbles = BubbleMaker("right", "bottom");
  return (
    <StyledBubbleSection>
      {renderedTopBubbles}
      {renderedBottomBubbles}
      <div className="contentWrapper">{children}</div>
    </StyledBubbleSection>
  );
};
