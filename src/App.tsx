import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme/theme";
import { Layout } from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Playground } from "./pages/Playground/Playground";

type Theme = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const lsTheme = localStorage.getItem("theme") as Theme | null;
    if (lsTheme) {
      setTheme(lsTheme);
    }
  }, []);

  const toggleTheme = () => {
    const changeTheme = theme === "light" ? "dark" : "light";
    setTheme(changeTheme);
    localStorage.setItem("theme", changeTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Layout themeSwitch={toggleTheme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
