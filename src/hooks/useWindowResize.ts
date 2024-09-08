import { useEffect, useState } from "react";

export const useWindowResize = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const Resize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", Resize);
    return () => window.removeEventListener("resize", Resize);
  });

  return windowWidth;
};
