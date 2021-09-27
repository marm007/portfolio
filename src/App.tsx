import React from "react";
import styled from "styled-components";
import Project from "./components/Project";
import data from "./data/projects.json";

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

    @media(max-width: 576px) {
      padding: .5rem 0.5rem;
    }
`;

const Projects = styled.section`
    display: flex;
    flex-wrap: wrap;
`;

const App = (): JSX.Element => {

  return (
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
            desc={project.desc}
            techStack={project.techStack}
            frontendURL={project.frontendURL}
            backendURL={project.backendURL}
            repositoryURL={project.repositoryURL} />
        })}

      </Projects>
    </Container>
  );
}

export default App;
