import React, { useContext, useRef } from "react";
import MenuContext from "../../contexts/menu-context";
import { techStackIcons } from "../../data/icons";
import Slider from "../Slider";
import TechStack from "../TechStack";
import { ProejctHeader, ProjectBody, ProjectContainer, ProjectDescriptionContainer, ProjectGithubLogo, ProjectRepoButton, ProjectRepoContainer, ProjectRepoLink, ProjectTechStacksContainer, ProjectTitle, ProjectTitleContainer, ProjectWebsiteLink } from "./styled";
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

    const { showMenu } = useContext(MenuContext);
    const projectRepoButtonRef = useRef<HTMLButtonElement | null>(null)

    return <ProjectContainer>
        <ProejctHeader>
            <ProjectRepoContainer>
                {
                    repositoryURL.length === 1 ?
                        (<ProjectRepoLink href={repositoryURL[0]?.url}>
                            <ProjectGithubLogo src="./assets/github-icon.svg" />
                        </ProjectRepoLink>) :
                        (<ProjectRepoButton ref={projectRepoButtonRef}
                            onClick={() => {
                                if (showMenu) showMenu(projectRepoButtonRef, repositoryURL)
                            }}>
                            <ProjectGithubLogo src="./assets/github-icon.svg" />
                        </ProjectRepoButton>)
                }
            </ProjectRepoContainer>
            <ProjectTitleContainer>
                <div>
                    <ProjectTitle>
                        <h2>{title}</h2>
                        {subtitle && <span style={{ color: "#747373" }}>{subtitle}</span>}
                    </ProjectTitle>
                    {frontendURL && <ProjectWebsiteLink ><a href={frontendURL}>Live demo</a></ProjectWebsiteLink>}
                    {backendURL && <ProjectWebsiteLink ><a href={backendURL}>API</a></ProjectWebsiteLink>}
                </div>
            </ProjectTitleContainer>

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
