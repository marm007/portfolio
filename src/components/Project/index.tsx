import React, { useContext, useRef } from "react";
import MenuContext from "../../contexts/menu-context";
import { techStackIcons } from "../../data/icons";
import Slider from "../Slider";
import TechStack from "../TechStack";
import { ProejctHeader, ProjectBody, ProjectContainer, ProjectDescriptionContainer, ProjectLogo, ProjectLogoButton, ProjectLogoContainer, ProjectLogoLink, ProjectTechStacksContainer, ProjectTitle, ProjectTitleContainer, ProjectWebsiteLink } from "./styled";
import { ProjectProps } from "./types";


const Project = ({
    title,
    subtitle,
    photos,
    video,
    desc,
    projectLinks,
    websites,
    techStack
}: ProjectProps): JSX.Element => {

    const { showMenu } = useContext(MenuContext);
    const projectRepoButtonRef = useRef<HTMLButtonElement | null>(null)

    return <ProjectContainer>
        <ProejctHeader>
            <ProjectLogoContainer>
                {
                    projectLinks.websites.length === 1 ?
                        (<ProjectLogoLink href={projectLinks.websites[0]?.url}>
                            <ProjectLogo src={projectLinks.icon} />
                        </ProjectLogoLink>) :
                        (<ProjectLogoButton ref={projectRepoButtonRef}
                            onClick={() => {
                                if (showMenu) showMenu(projectRepoButtonRef, projectLinks.websites)
                            }}>
                            <ProjectLogo src={projectLinks.icon} />
                        </ProjectLogoButton>)
                }
            </ProjectLogoContainer>
            <ProjectTitleContainer>
                <div>
                    <ProjectTitle>
                        <h2>{title}</h2>
                        {subtitle && <span style={{ color: "#747373" }}>{subtitle}</span>}
                    </ProjectTitle>
                    {websites.map((_, index) => {
                        const website = _ as any;
                        const keys = Object.keys(website)
                        return <ProjectWebsiteLink key={index}><a href={website[keys[0]]}>{keys[0]}</a></ProjectWebsiteLink>
                    })}
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
