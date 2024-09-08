import { useEffect } from "react";

export const ScrollReset = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
};
