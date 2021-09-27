import styled, { keyframes, css } from "styled-components";
import { SlideDirection, SliderBulletProps } from "./types";
import Image from '../Image'

const animationDuration = 1.5
const animationTiming = 'ease'

const slideInRight = keyframes`
    from {
        left: -100%;
    }

    to {
        left: 0%;
    }
    `;

const slideInLeft = keyframes`
    0% {
        left: 100%;
    }

    100% {
        left: 0%;
    }
`;

const slideInRightAnimation = css`
    left: -100%;
    animation: ${slideInRight} ${animationDuration}s ${animationTiming};
`;


const slideInLeftAnimation = css`
    left: 100%;
    animation: ${slideInLeft} ${animationDuration}s ${animationTiming};
`;

const slideOutLeft = keyframes`
    0% {
        left 0%;
    }    

    100% {
        left: -100%;
    }
`

const slideOutRight = keyframes`
    0% {
        left 0%;
    }    

    100% {
        left: 100%;
    }
`
const slideOutRightAnimation = css`
    left: -100%;
    animation: ${slideOutRight} ${animationDuration}s ${animationTiming};
`;

const slideOutLeftAnimation = css`
    left: -100%;
    animation: ${slideOutLeft} ${animationDuration}s ${animationTiming};
`;

const noSlideAnimation = css`
    left: 100%;
`;

export const SliderContainer = styled.div`
    overflow: hidden;
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
   /*  border-top: 1px rgba(0,0,0, .225) solid;
    border-bottom: 1px rgba(0,0,0, .225) solid; */

    &:before {
        display: block;
        content: "";
        padding-top: 58%;
    }
`;

export const SliderImage = styled(Image)`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    left: 0%;
   
    ${props => props.animate ? props.direction === SlideDirection.Left ? slideOutLeftAnimation : slideOutRightAnimation : css``}

`;

export const SliderOffsetImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 100%;
    bottom: 0;
    width: 100%;
    height: 100%;

    ${props => props.animate ? props.direction === SlideDirection.Left ? slideInLeftAnimation : slideInRightAnimation : noSlideAnimation}
`;

export const SliderBulletContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    

    @media (max-width: 575px) {
        bottom: 10px;
    }
`;

export const SliderBullet = styled.button<SliderBulletProps>`
    background-color: #888;
    padding: 0;
    display: block;
    width: 16px;
    height: 16px;
    border: none;
    overflow: hidden;
    text-indent: -9998px;
    margin: 4px;
    border-radius: 50%;
    cursor: pointer;
    transform: scale(${props => props.isPicked ? '1.5, 1.5' : '1, 1'});
    opacity: ${props => !props.isPicked ? 0.2 : 0.85};

    @media (max-width: 575px) {
        width: 8px;
        height: 8px;
    }
`;

export const SliderDim = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #03192730;
`;

const ArrowImage = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`


export const LeftArrowImage = styled(ArrowImage)`
    left: 10px;
`


export const RightArrowImage = styled(ArrowImage)`
    right: 10px;
`

export const SliderLeftButton = styled.button`
    position: absolute;
    padding: 0;
    display: block;
    border: none;
    width: 30%;
    height: 100%;
    cursor: pointer;
    top: 0;
    left: 0;
    opacity: 0.3;
    background: rgba(0, 0, 0, 0) linear-gradient(to right, rgba(0, 0, 0, 0.65) 0px, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0%;

    transition: opacity 0.15s ease-out 0s;

    &:hover {
        opacity: 0.8;
    }
`

export const SliderRightButton = styled.button`
    position: absolute;
    padding: 0;
    display: block;
    border: none;
    width: 30%;
    height: 100%;
    cursor: pointer;
    top: 0;
    right: 0;
    opacity: 0.3;
    background: rgba(0, 0, 0, 0) linear-gradient(to left, rgba(0, 0, 0, 0.65) 0px, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0%;

    transition: opacity 0.15s ease-out 0s;

    &:hover {
        opacity: 0.8;
    }
`

