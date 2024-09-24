import { BubbleSection } from "../../components/BubbleSection";
import yrgoImg from "../../assets/images/yrgo2.png";
import ericssonImg from "../../assets/images/ericsson2.png";
import { FancyButton } from "../../components/FancyButton";
import { InfoCard, InfoCardData } from "../../components/InfoCard";
import { Link } from "react-router-dom";
import {
  StyledMain,
  StyledSectionFour,
  StyledSectionThree,
} from "./Home.styles";
import { useTheme } from "styled-components";

const infoCards: InfoCardData[] = [
  {
    legend: "Yrgo",
    img: yrgoImg,
    title: "Yrgo Web Development",
    secondTitle: "Type: Education",
    thirdTitle: "Duration: 2022/08 - 2024-06",
    text: "Program directed towards becoming a fullstack developer. Working in teambased environment with other developers and digital designers to create web applications. Using tech such as SQLite, PHP, Laravel, React, Typescript, Supabase, nextJS, Wordpress and Hydrogen. The program concluded with 6-months of hands on practics at a company within the industry.",
  },
  {
    legend: "Ericsson",
    img: ericssonImg,
    title: "Ericsson",
    secondTitle: "Type: Internship/Work",
    thirdTitle: "Duration: 2023/11 - Present",
    text: "Part of Ericsson's STS-automation team, developing web applications for internal use. I've worked with technologies like React, Node.js, TypeScript, MongoDB, MySQL, and Grafana. In addition to extensive coding, I've gained valuable experience in agile practices, holding presentations, and being a collaborative and productive team member.",
  },
];

export const Home = () => {
  const theme = useTheme();

  const renderedInfoCards = infoCards.map((infoCard) => {
    return (
      <>
        <InfoCard cardContent={infoCard} />
      </>
    );
  });

  return (
    <StyledMain>
      <section className="sectionOne">
        <h1>
          Welcome to my <br /> <span>website!</span>
        </h1>
        <h2 className="twText">I am a developer based in Gothenburg.</h2>
      </section>
      <section className="sectionTwo">
        <div className="sliderContainer">
          <div className="slider"></div>
        </div>
      </section>
      <BubbleSection>
        <StyledSectionThree>
          <div>
            <h2>My name is Petter Jakobsson.</h2>
            <p style={{ fontWeight: 500 }}>
              I'm a full-stack web developer based in Gothenburg, Sweden, with
              experience across a range of languages and frameworks. My main
              focus is JavaScript, and I particularly enjoy working with
              <span
                style={{
                  color: theme.accent,
                  fontStyle: "italic",
                  fontWeight: "800",
                }}>
                {" "}
                React
              </span>
              ,
              <span
                style={{
                  color: theme.accent,
                  fontStyle: "italic",
                  fontWeight: "800",
                }}>
                {" "}
                TypeScript{" "}
              </span>{" "}
              and
              <span
                style={{
                  color: theme.accent,
                  fontStyle: "italic",
                  fontWeight: "800",
                }}>
                {" "}
                Styled Components
              </span>
              . Currently, I’m part of an automation team at Ericsson, where we
              develop web applications that help streamline workflows and
              improve productivity.
              <br />
              <span style={{ display: "block", marginTop: "12px" }}>
                Outside of technology, i like to spend time with my girlfriend
                and my dog, taking walks in the nature and exploring new places.
              </span>
            </p>
            <div>
              <FancyButton to="/contact" text={"Contact"}></FancyButton>
              <FancyButton
                to="https://www.linkedin.com/in/petter-jakobsson-63a009273/"
                text={"Linked-in →"}></FancyButton>
              <FancyButton
                to="https://github.com/jaken92"
                text={"Github →"}></FancyButton>
            </div>
          </div>
        </StyledSectionThree>
        <StyledSectionFour>
          <h2>Experience</h2>
          <div className="experiencesContainer">{renderedInfoCards}</div>
        </StyledSectionFour>
      </BubbleSection>
      <div className="footer">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://github.com/jaken92">
          Github
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="https://www.linkedin.com/in/petter-jakobsson-63a009273/">
          Linked-in
        </Link>
        <Link target="_blank" rel="noopener noreferrer" to="/contact">
          Contact
        </Link>
      </div>
    </StyledMain>
  );
};
