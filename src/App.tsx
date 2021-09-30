import React, { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Menu from "./components/Menu";
import Project from "./components/Project";
import MenuContext from "./contexts/menu-context";
import data from "./data/projects.json";
import { breakpoints } from "./helpers";

const Container = styled.div`
    text-align: justify;
    max-width: 950px;
    padding: .25rem 0;
    margin: auto auto;
`;

const Header = styled.div`
    padding: .5rem 3rem;
    display: grid;
    font-size: calc(10px + 2vmin);
    color: black;
    line-height: 1.5;

    & > span {
      font-size: 16px;
    }

    @media(max-width: ${breakpoints.mobile}) {
      padding: .5rem 1rem;
    }
`;

const Projects = styled.section`
    display: flex;
    flex-wrap: wrap;
`;

type GlobalStyleProps = {
  isMenuVisible: boolean;
}
const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    background-color: #fff;
    margin: 0;
    font-family: "Roboto",sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: ${({ isMenuVisible }) => isMenuVisible ? 'hidden' : 'unset'};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`
const App = (): JSX.Element => {

  const { menu } = useContext(MenuContext);

  return (
    <>
      {console.log("show", menu.show)}
      <GlobalStyle isMenuVisible={menu.show} />
      <Container>
        <Header>
          <h1>Hi,</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            quis mauris sodales libero mattis lobortis. Praesent nisi erat,
            aliquet in bibendum a, lobortis a urna. Suspendisse potenti. Nunc
            dignissim consectetur varius. Proin suscipit massa ipsum, nec
            consequat leo posuere sit amet. Morbi pellentesque sem et tortor
            consequat, pellentesque lacinia justo accumsan. Nunc suscipit lacus ut
            risus venenatis egestas.
          </span>
        </Header>

        <Projects>
          {data.projects.map(project => {
            return <Project
              key={`project-${project.title}`}
              title={project.title}
              subtitle={project.subtitle}
              photos={project.photos}
              video={project.video}
              desc={project.desc}
              techStack={project.techStack}
              frontendURL={project.frontendURL}
              backendURL={project.backendURL}
              repositoryURL={project.repositoryURL} />
          })}

        </Projects>

        <Menu />
      </Container>
    </>
  );
}

export default App;
