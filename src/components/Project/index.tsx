import React from "react";
import { techStackIcons } from "../../data/icons";
import Slider from "../Slider";
import TechStack from "../TechStack";
import { ProejctHeader, ProjectBody, ProjectContainer, ProjectDescriptionContainer, ProjectGithubLogo, ProjectRepoLink, ProjectTechStacksContainer, ProjectTitle, ProjectWebsiteLink } from "./styled";
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
        <ProejctHeader>
            <div>
                <ProjectRepoLink href={repo}>
                    <ProjectGithubLogo src="./assets/github-icon.svg" />
                </ProjectRepoLink>
            </div>
            <div style={{ paddingLeft: '1.5rem' }}>

                <ProjectTitle>
                    <h2>{title}</h2>
                </ProjectTitle>

                {website && <ProjectWebsiteLink href={website}>{website}</ProjectWebsiteLink>}
            </div>

        </ProejctHeader>
        <Slider photos={photos} />
        <ProjectBody>

            <ProjectDescriptionContainer>
                <span>{desc.short}</span>
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
