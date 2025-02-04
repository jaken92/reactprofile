import { BubbleSection } from "../../components";
import { StyledProjects } from "./Projects.styles";
import { Project } from "./Projects.types";

export const Projects = () => {
  const projects: Project[] = [
    {
      name: "Portfolio Website",
      tech: "React/Typescript/Styled Components",
      description:
        "A web presentation of me as a developer(this website). This project has been created with React, Typescript and styled components. I have used additional packages such as TanStackQuery, React Final Form and React Router.",
      deployment: "https://petterjakobsson.netlify.app/",
      github: "https://github.com/jaken92/reactprofile",
    },
    {
      name: "Rest Api",
      tech: "NodeJS/Express",
      description:
        "Api still under development. Currently housing the endpoint to handle inquiries from the contact form of my Portfolio Website.",
      deployment: "https://nodeprofile-production.up.railway.app/",
      github: "https://github.com/jaken92/nodeprofile",
    },

    {
      name: "Flower Shop",
      tech: "Hydrogen/React/Tailwind",
      description:
        "Webshop developed for a florist operation. Utilizing shopifys backend to handle orders and payments along with the React-based Hydrogen framework to build the frontend. Styling with tailwind.",
      deployment: "https://www.mouaflowers.com/",
      github: "https://github.com/jaken92/flower-store",
    },
    {
      name: "Kino Koszyk",
      tech: "Php/Wordpress",
      description:
        "School project utilizing wordpress as a CMS. We were tasked to make a demo for a webpage for photo/film studio Kino Koszyk, using their content to show our take on it.",
      github: "https://github.com/jaken92/Kino-wp",
    },
    {
      name: "Hangman",
      tech: "React",
      description:
        "My first fiddle with React. Creating a simple hangman-app was a good way to get a grasp on state-management and react components.",
      deployment: "https://dopest-hangman.netlify.app/",
      github: "https://github.com/jaken92/hangman",
    },
    {
      name: "Recipe Book",
      tech: "Php/Laravel/MySQL",
      description:
        "One of the first fullstack projects I created. Working with database, relations, routing, controllers and querybuilding in Laravel.",
      github: "https://github.com/jaken92/Recipes-Book",
    },
  ];

  const renderedProjects = projects.map((item) => {
    return (
      <li key={item.name}>
        <details>
          <summary>
            <h2>
              <span>{item.name}</span>
              <span>{item.tech}</span>
            </h2>
          </summary>
          <div>
            <ul>
              <li className="row" key="description">
                <p>{item.description}</p>
              </li>
              <li key="github">
                <p>Github:</p>
                <p>
                  <a href={item.github}>{item.github}</a>
                </p>
              </li>
              <li className="row" key="deployment">
                <p>Deployment:</p>
                <p>
                  {item.deployment ? (
                    <a href={item.deployment}>{item.deployment}</a>
                  ) : (
                    <span>Currently not deployed.</span>
                  )}
                </p>
              </li>
            </ul>
          </div>
        </details>
      </li>
    );
  });

  return (
    <BubbleSection>
      <StyledProjects>
        <div>
          <fieldset>
            <legend>Projects</legend>
            <ul>{renderedProjects}</ul>
          </fieldset>
        </div>
      </StyledProjects>
    </BubbleSection>
  );
};
