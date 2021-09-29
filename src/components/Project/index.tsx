import React from "react";
import { techStackIcons } from "../../data/icons";
import Slider from "../Slider";
import TechStack from "../TechStack";
import { ProejctHeader, ProjectBody, ProjectContainer, ProjectDescriptionContainer, ProjectGithubLogo, ProjectRepoLink, ProjectTechStacksContainer, ProjectTitle, ProjectWebsiteLink } from "./styled";
import { ProjectProps } from "./types";


const Project = ({
    title,
    subtitle,
    photos,
    video,
    desc,
    repositoryURL,
    frontendURL,
    backendURL,
    techStack
}: ProjectProps): JSX.Element => {
    return <ProjectContainer>
        <ProejctHeader>
            <div>
                <ProjectRepoLink href={repositoryURL}>
                    <ProjectGithubLogo src="./assets/github-icon.svg" />
                </ProjectRepoLink>
            </div>
            <div style={{ paddingLeft: '1.5rem' }}>

                <ProjectTitle>
                    <h2>{title}</h2>
                    {subtitle && <span style={{ color: "#747373" }}>{subtitle}</span>}
                </ProjectTitle>
                {frontendURL && <ProjectWebsiteLink ><a href={frontendURL}>Live demo</a></ProjectWebsiteLink>}
                {backendURL && <ProjectWebsiteLink ><a href={backendURL}>API</a></ProjectWebsiteLink>}
            </div>

        </ProejctHeader>
        <Slider video={video} photos={photos} />
        <ProjectBody>

            <ProjectDescriptionContainer>
                <span>{desc}</span>
            </ProjectDescriptionContainer>
            <ProjectTechStacksContainer>
                {
                    techStack.map((s, index) => {
                        return <TechStack key={`stack-${index}`} name={s} icon={techStackIcons[s]} />
                    })
                }
            </ProjectTechStacksContainer>
        </ProjectBody>
    </ProjectContainer>;
};

export default Project;
