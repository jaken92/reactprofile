import styled, { useTheme } from "styled-components";
import { useWindowResize } from "../../hooks/useWindowResize";

const StyledBubbleSection = styled.section`
  background-color: ${(props) => props.theme.primary};
  position: relative;
  overflow: hidden;
  font-family: system-ui, sans-serif;

  & > .contentWrapper {
    z-index: 200 !important;
  }

  /* @keyframes pulsate {
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
  } */

  @keyframes pulsate {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
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
      color: theme.accent,
      insetX: 7,
      insetY: 83,
      opacity: 0.6,
    },
    {
      size: 3,
      color: theme.accent,
      insetX: 5,
      insetY: 84,
      opacity: 0.4,
    },
    {
      size: 7,
      color: theme.accent,
      insetX: 2,
      insetY: 78,
      opacity: 0.7,
    },
    {
      size: 12,
      color: theme.accent,
      insetX: -6,
      insetY: 77,
      opacity: 0.6,
    },
    {
      size: 10,
      color: theme.accent,
      insetX: -1,
      insetY: 72,
      opacity: 0.6,
    },
    {
      size: 12,
      color: theme.accent,
      insetX: -4,
      insetY: 11,
      opacity: 0.5,
    },
    // {
    //   size: 15,
    //   color: theme.accent,
    //   insetX: 11,
    //   insetY: 10,
    //   opacity: 0.7,
    // },
    {
      size: 6,
      color: theme.accent, //2nd
      insetX: 4,
      insetY: 12,
      opacity: 0.8,
    },
    {
      size: 18,
      color: theme.accent,
      insetX: 15,
      insetY: -6,
      opacity: 0.3,
    },
    {
      size: 8,
      color: theme.accent, //2nd
      insetX: 12,
      insetY: 7,
      opacity: 0.8,
    },
    {
      size: 11,
      color: theme.accent, //2nd
      insetX: 8,
      insetY: -3,
      opacity: 0.5,
    },
    {
      size: 2,
      color: theme.accent,
      insetX: 2.5,
      insetY: 29,
      opacity: 0.4,
    },

    {
      size: 17,
      color: theme.accent, //2nd
      insetX: 0.1,
      insetY: 0.1,
      opacity: 0.3,
    },
    {
      size: 15,
      color: theme.accent,
      insetX: -5,
      insetY: -7,
      opacity: 0.2,
    },
  ];

  const BubbleMaker = (
    sideX: "left" | "right",
    sideY: "top" | "bottom"
  ): JSX.Element[] => {
    const renderedBubbles = bubbles.map((bubble, i) => {
      const animationDelay = Math.floor(Math.random() * 6);

      const styling: React.CSSProperties = {
        height:
          (windowWidth > 800 ? bubble.size * 0.8 : bubble.size * 0.5) + "rem",
        width:
          (windowWidth > 800 ? bubble.size * 0.8 : bubble.size * 0.5) + "rem",
        position: "absolute",
        backgroundColor: theme.isDark ? "transparent" : bubble.color,
        borderRadius: "50%",
        opacity: theme.isDark ? "1" : bubble.opacity,
        animation: `pulsate 6s ease-in-out ${animationDelay}s infinite`,
        border: theme.isDark ? `2px solid ${theme.accent}` : "none",
        // zIndex: "1",
      };

      styling[sideX] =
        (windowWidth > 850 ? bubble.insetX : bubble.insetX * 0.5) + "rem";
      styling[sideY] =
        (windowWidth > 850 ? bubble.insetY : bubble.insetY * 0.5) + "rem";

      return <div key={i} style={styling}></div>;
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
