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
      font-size: 18px;
      font-family: Roboto,sans-serif;
      font-weight: 400;
      line-height: 30px;
      color: #555;
    }

    @media(max-width: ${breakpoints.mobile}) {
      padding: .5rem 1rem;
    }
`;

const Projects = styled.section`
    display: flex;
    flex-wrap: wrap;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Icon = styled.img`
    cursor: pointer;
    width: 50px;
    height: 50px;
    padding: 10px;
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
      <GlobalStyle isMenuVisible={menu.show} />
      <Container>
        <Header>
          <h1>Hi,</h1>
          <span>
            My name is Marcin Mieszczak. I'm a responsible and hardworking Junior Software Engineer.
            I graduated from AGH UST with Bachelor of Science in Computer Science Degree.
            During my studies, I have created many programs in Javascript, Java, C#, C++ and Python including YouTube-like and Instagram-like applications and application to simulate Grain Growth in 2D and 3D spaces using parallel computing.
            In my spare time, I've also created some simple games for Android and iOS.
            I am familiar with technologies such as React, Angular, Vue, Node.js, Django and Spring Boot.
          </span>
        </Header>
        <ButtonsContainer>
          <a href="./assets/Marcin_Mieszczak_CV.pdf"> <Icon src="./assets/cv1.svg" /> </a>
          <a href="https://github.com/marm007?tab=repositories"> <Icon src="./assets/github-icon.svg" /> </a>
        </ButtonsContainer>
        <Projects>
          {data.projects.map(project => {
            return <Project
              key={`project-${project.title}`}
              title={project.title}
              subtitle={project.subtitle}
              photos={project.photos}
              video={project.video}
              desc={project.desc}
              websites={project.websites}
              techStack={project.techStack}
              projectLinks={project.projectLinks} />
          })}

        </Projects>

        <Menu />
      </Container>
    </>
  );
}

export default App;
