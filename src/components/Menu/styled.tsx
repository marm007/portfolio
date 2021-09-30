import styled, { css, keyframes } from "styled-components";

type MenuContainerProps = {
    show: boolean;
}

const fadeIn = keyframes`
   0% {
        display: none;
        opacity: 0;
    }

    1% {
        display: block;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
`

const fadeInAnimation = css`
    animation: ${fadeIn} 300ms ease forwards;
`

export const MenuContainer = styled.div<MenuContainerProps>`
    position: absolute;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);
    border-radius: 4px;
    opacity: 0;
    transform: none;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
    z-index: 9999;

    ${({ show }) => show ? fadeInAnimation : css``};

    body {
        overflow: hidden;
    }

    & ul {
    margin: 0px;
    padding: 8px 0;
    list-style: outside none none;
    }

    & li {
        padding: 8px 12px;
        cursor: pointer;
        user-select: none;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5;
        letter-spacing: 0.001em;
        display: flex;
    }

    & li:hover {
        background-color: rgba(0, 0, 0, 0.04);
        transition: background-color 0.5s ease-out;
    }

    & li a {
        text-decoration: none;
        color: inherit;
    }
    
    & li a:active {
        color: inherit;
    }
`