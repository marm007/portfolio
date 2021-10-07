import styled from "styled-components";
import { breakpoints } from "../../helpers";

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

    @media (max-width: ${breakpoints.mobile}) {
        flex-wrap: wrap;

        & > div  {
            justify-content: center;
            display: flex;
            align-items: center;
        }

        & > div > div {
            text-algin: center;
        }
    }
`;
export const ProjectTitleContainer = styled.div`
    padding-left: 1.5rem;
    @media (max-width: ${breakpoints.mobile}) {
        padding-left: 0;
        flex-basis: 100%;
        max-width: 100%;
        padding-top: 15px;
    }
`
export const ProjectTitle = styled.div` 
    width: auto;
    text-align: unset;
    font-family: "Roboto",sans-serif;
    padding-bottom: .5rem;

    & > h2 { 
        margin: 0 0 0.25rem;
    }
    
`;

export const ProjectLogoContainer = styled.div`
    @media (max-width: ${breakpoints.mobile}) {
        flex-basis: 100%;
        max-width: 100%;
    }
`;

export const ProjectLogoLink = styled.a`
    
`;

export const ProjectLogoButton = styled.button`
    outline: 0;
    overflow: hidden;
    cursor: pointer;
    background: transparent;
    border: none;
`;

export const ProjectLogo = styled.img`
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
    line-height: 1.4;
`;

export const ProjectTechStacksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const linkColor = "#5673c1"

export const ProjectWebsiteLink = styled.div`
    margin-bottom: .35rem;

    & a  {
        color: ${linkColor};
        transition: all .3s;
        position: relative;
        text-decoration: none;
        cursor: pointer;      

        &:hover {
            color: ${linkColor};
            text-decoration: underline;
        }
    }
`;
