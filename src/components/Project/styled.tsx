import styled from "styled-components";

export const ProjectContainer = styled.div`
    background: #fff;
    border-radius: .25rem;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    margin: 2.5rem auto;
    position: relative;
    max-width: 700px;
    display: grid;
`;

export const ProjectBody = styled.div`
    padding: 1.5rem;
    text-align: left;
`;

export const ProejctHeader = styled.div`
    padding: 1.5rem;
    text-align: left;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`;

export const ProjectTitle = styled.div` 
    width: auto;
    text-align: unset;
    font-family: "Roboto",sans-serif;
    padding-bottom: .15rem;
   
    & > h2 { 
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    @media (max-width: 576px) {
        width: 100%;
        text-align: center;
    }
`;

export const ProjectRepoLink = styled.a`
`;

export const ProjectGithubLogo = styled.img`
    cursor: pointer;
    width: 50px;
    height: 50px;
`;

export const ProjectDescriptionContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: .9rem;
    font-weight: 400;
    color: #747373;
    font-family: "Roboto",sans-serif;
`;

export const ProjectTechStacksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ProjectWebsiteLink = styled.a`
    color: #6d56c1;
    transition: all .3s;
    position: relative;
    text-decoration: none;
    cursor: pointer;      

    &:hover {
    color: #6d56c1;
    text-decoration: underline;
    }
`;