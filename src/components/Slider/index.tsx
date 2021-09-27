import React, { useEffect, useReducer, useRef } from "react";
import { sliderReducer } from "./reducer";
import { SliderBullet, SliderBulletContainer, SliderContainer, SliderImage, SliderOffsetImage, LeftArrowImage, RightArrowImage, SliderLeftButton, SliderRightButton } from "./styled";
import { SlideDirection, SliderProps, SliderState } from "./types";

const Slider = ({ photos }: SliderProps): JSX.Element => {

    const sliderInitialState: SliderState = {
        playAnimation: false,
        isPrepared: false,
        currentImage: photos[0],
        offsetImage: "",
        slidePosition: 0,
        slideDirection: SlideDirection.Left
    }

    const sliderRef = useRef<HTMLDivElement>(null);

    const [{
        playAnimation,
        isPrepared,
        currentImage,
        offsetImage,
        slidePosition,
        slideDirection
    }, dispatch] = useReducer(sliderReducer, sliderInitialState);

    useEffect(() => {
        let current = sliderRef.current;
        const handleAnimationEnd = () => {
            dispatch({ type: "end" })
        }

        if (current) {
            current.addEventListener('animationend', handleAnimationEnd);
            return function cleanup() {
                current?.removeEventListener('animationend', handleAnimationEnd);
            }
        }
    })

    const handleImageChange = (index: number) => {
        if (playAnimation || isPrepared) return;
        const change = slidePosition - index;
        if (change !== 0) {
            dispatch({
                type: "prepare", data: {
                    offsetImage: photos[index],
                    slidePosition: index,
                    slideDirection: (change < 0 ? SlideDirection.Right : SlideDirection.Left)
                }
            })
        }
    }

    const handleImageChangeButtonClick = (direction: SlideDirection) => {
        if (playAnimation || isPrepared) return;

        let index = slidePosition + (direction === SlideDirection.Left ? -1 : 1);
        if (index >= photos.length) index = 0;
        if (index < 0) index = photos.length - 1;

        dispatch({
            type: "prepare", data: {
                offsetImage: photos[index],
                slidePosition: index,
                slideDirection: direction
            }
        })
    }

    return (
        <>
            <SliderContainer ref={sliderRef}>
                <SliderImage animate={playAnimation ? 1 : 0} direction={slideDirection} src={currentImage} />
                <SliderOffsetImage animate={playAnimation ? 1 : 0} direction={slideDirection}
                    src={offsetImage} onLoad={() => {
                        if (isPrepared) {
                            dispatch({
                                type: "start"
                            })
                        }
                    }} />
                <SliderLeftButton onClick={() => handleImageChangeButtonClick(SlideDirection.Left)}>
                    <LeftArrowImage src="./assets/left-arrow.svg" />
                </SliderLeftButton>
                <SliderRightButton onClick={() => handleImageChangeButtonClick(SlideDirection.Right)}>
                    <RightArrowImage src="./assets/right-arrow.svg" />
                </SliderRightButton>
            </SliderContainer>
            <SliderBulletContainer>
                {
                    [...photos].map((_, index) => {
                        return <SliderBullet key={index} isPicked={index === slidePosition}
                            onClick={() => handleImageChange(index)}>index</SliderBullet>
                    })
                }
            </SliderBulletContainer>
        </>
    )

}

export default Slider;