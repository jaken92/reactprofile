import styled, { useTheme } from "styled-components";
import { useWindowResize } from "../../hooks/useWindowResize";

const StyledBubbleSection = styled.section`
  background-color: ${(props) => props.theme.black};
  position: relative;
  overflow: hidden;
  font-family: system-ui, sans-serif;

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
    opacity: number;
  }

  const bubbles: Bubbles[] = [
    {
      size: 1,
      color: theme.aqua,
      insetX: 9,
      insetY: 83,
      opacity: 0.6,
    },
    {
      size: 3,
      color: theme.aqua,
      insetX: 5,
      insetY: 84,
      opacity: 0.6,
    },
    {
      size: 7,
      color: theme.aqua,
      insetX: 2,
      insetY: 78,
      opacity: 0.6,
    },
    {
      size: 12,
      color: theme.aqua,
      insetX: -6,
      insetY: 77,
      opacity: 0.6,
    },
    {
      size: 10,
      color: theme.aqua,
      insetX: -1,
      insetY: 72,
      opacity: 0.6,
    },
    {
      size: 12,
      color: theme.aqua,
      insetX: -4,
      insetY: 11,
      opacity: 1,
    },
    {
      size: 15,
      color: theme.aqua,
      insetX: 11,
      insetY: 10,
      opacity: 0.7,
    },
    {
      size: 16,
      color: theme.aqua, //2nd
      insetX: 3,
      insetY: 15,
      opacity: 0.5,
    },
    {
      size: 18,
      color: theme.aqua,
      insetX: 15,
      insetY: -6,
      opacity: 0.3,
    },
    {
      size: 8,
      color: theme.aqua, //2nd
      insetX: 12,
      insetY: 7,
      opacity: 0.8,
    },
    {
      size: 11,
      color: theme.aqua, //2nd
      insetX: 8,
      insetY: -3,
      opacity: 0.5,
    },
    {
      size: 2,
      color: theme.aqua,
      insetX: 2.5,
      insetY: 29,
      opacity: 0.4,
    },

    {
      size: 17,
      color: theme.aqua, //2nd
      insetX: 0.1,
      insetY: 0.1,
      opacity: 0.3,
    },
    {
      size: 15,
      color: theme.aqua,
      insetX: -5,
      insetY: -7,
      opacity: 0.2,
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
        backgroundColor: theme.isDark ? "transparent" : bubble.color,
        borderRadius: "50%",
        opacity: theme.isDark ? "1" : bubble.opacity,
        animation: `pulsate 10s ease-in-out ${animationDelay}s infinite`,
        border: theme.isDark ? `2px solid ${theme.aqua}` : "none",
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

  const renderedTopBubbles = BubbleMaker("right", "top");
  const renderedBottomBubbles = BubbleMaker("left", "bottom");
  return (
    <StyledBubbleSection>
      {renderedTopBubbles}
      {renderedBottomBubbles}
      <div className="contentWrapper">{children}</div>
    </StyledBubbleSection>
  );
};
