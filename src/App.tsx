import React from "react";
import styled from "styled-components";
import Project from "./components/Project";
import data from "./data/projects.json";

const Container = styled.div`
    text-align: justify;
    max-width: 950px;
    padding: .25rem 2.5rem;
    margin: auto auto;
`;

const Header = styled.div`
    padding: .5rem .5rem;
    display: grid;
    font-size: calc(10px + 2vmin);
    color: black;

    & > span {
      font-size: 16px;
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
            photos={project.photos}
            desc={project.desc}
            techStack={project.techStack}
            website={project.website}
            repo={project.repo} />
        })}

      </Projects>
    </Container>
  );
}

export default App;
