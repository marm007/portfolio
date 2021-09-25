import React from "react";
import githubIcon from "../../assets/github-icon.svg"
import Slider from "../Slider";
import TechStack from "../TechStack";
import { ProejctHeader, ProjectContainer, ProjectDescriptionContainer, ProjectGithubLogo, ProjectHeaderBottom, ProjectHeaderTop, ProjectRepoLink, ProjectTechStacksContainer, ProjectTextContainer, ProjectTitle, ProjectWebsiteLink } from "./styled";
import { ProjectProps } from "./types";


const Project = ({
    title,
    photos,
    video,
    desc,
    repo,
    website,
    techStack
}: ProjectProps): JSX.Element => {
    return <ProjectContainer>
        <Slider photos={photos} />
        <ProjectTextContainer>
            <ProejctHeader>
                <ProjectHeaderTop>
                    <ProjectTitle>
                        <h2>{title}</h2>
                    </ProjectTitle>
                    <ProjectRepoLink href={repo}>
                        <ProjectGithubLogo src={githubIcon} />
                    </ProjectRepoLink>
                </ProjectHeaderTop>
                <ProjectHeaderBottom>
                    {website && <ProjectWebsiteLink href={website}>{website}</ProjectWebsiteLink>}
                </ProjectHeaderBottom>
            </ProejctHeader>
            <ProjectDescriptionContainer>
                <span>{desc.short}</span>
            </ProjectDescriptionContainer>
            <ProjectTechStacksContainer>
                {techStack.map(s => {
                    return <TechStack name={s.name} icon={s.icon} />
                })}
            </ProjectTechStacksContainer>
        </ProjectTextContainer>
    </ProjectContainer>;
};

export default Project;
