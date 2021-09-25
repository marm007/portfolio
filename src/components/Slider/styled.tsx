import styled, { keyframes } from "styled-components";
import { SlideDirection, SliderBulletProps, SliderImageProps } from "./types";


const slideRight = keyframes`
    from {
        left: -100%;
    }

    to {
        left: 0%;
    }
    `;

const slideLeft = keyframes`
    0% {
        left: 100%;
    }

    100% {
        left: 0%;
    }
`;

export const SliderContainer = styled.div`
    overflow: hidden;
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;

    &:before {
        display: block;
        content: "";
        padding-top: 58%;
    }
`;

export const SliderImage = styled.img<SliderImageProps>`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;

    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
`;


export const SliderOffsetImage = styled(SliderImage)`
    left: 100%;
    animation: ${props => props.animate && (props.direction === SlideDirection.Left ? slideLeft : slideRight)} 2s forwards;
`;

export const SliderBulletContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    bottom: 20px;

    @media (max-width: 575px) {
        bottom: 10px;
    }
`;


export const SliderBullet = styled.button<SliderBulletProps>`
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
    background-color: rgba(0, 0, 0, 0.1);
`;

