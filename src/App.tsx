import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme";
import { Layout } from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Playground } from "./pages/Playground/Playground";
import { Contact } from "./pages";

type ThemeColor = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<ThemeColor>("light");

  useEffect(() => {
    const lsTheme = localStorage.getItem("theme") as ThemeColor | null;
    if (lsTheme) {
      setTheme(lsTheme);
    }
  }, []);

  const toggleTheme = () => {
    const changeTheme = theme === "light" ? "dark" : "light";
    setTheme(changeTheme);
    localStorage.setItem("theme", changeTheme);
  };

  console.log(typeof theme);
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Layout themeSwitch={toggleTheme} theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;

// contact form - bubbling section - Intro - Tech - experiences
