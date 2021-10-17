import React, { useEffect, useReducer, useRef } from "react";
import { sliderReducer } from "./reducer";
import { LeftArrowImage, RightArrowImage, SlideMain, SlideOffset, SliderBullet, SliderBulletContainer, SliderContainer, SliderLeftButton, SlideImage, SliderRightButton, SlideVideo } from "./styled";
import { SlideDirection, SliderProps, SliderState } from "./types";

const Slider = ({ photos, video }: SliderProps): JSX.Element => {

    const slidesCount = useRef<number>(photos.length + (video ? 1 : 0))

    const sliderInitialState: SliderState = {
        playAnimation: false,
        isPrepared: false,
        currentImage: photos[0],
        offsetImage: "",
        slidePosition: 0,
        slideNextPosition: 0,
        slideDirection: SlideDirection.Left
    }

    const sliderRef = useRef<HTMLDivElement>(null);

    const [{
        playAnimation,
        isPrepared,
        currentImage,
        offsetImage,
        slidePosition,
        slideNextPosition,
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


    const handleSlideChange = (index: number) => {
        if (playAnimation || isPrepared) return;
        const change = slidePosition - index;
        if (change !== 0) {
            dispatch({
                type: "prepare", data: {
                    offsetImage: photos[index - (video ? 1 : 0)],
                    slidePosition: index,
                    slideDirection: (change < 0 ? SlideDirection.Right : SlideDirection.Left),
                    playAnimation: (video ? true : false) && (slidePosition === 0 || index === 0)
                }
            })
        }
    }

    const handleSlideChangeButtonClick = (direction: SlideDirection) => {
        if (playAnimation || isPrepared) return;

        let index = slidePosition + (direction === SlideDirection.Left ? -1 : 1);
        if (index >= slidesCount.current) index = 0;
        if (index < 0) index = slidesCount.current - 1;

        dispatch({
            type: "prepare", data: {
                offsetImage: photos[index - (video ? 1 : 0)],
                slidePosition: index,
                slideDirection: direction,
                playAnimation: (video ? true : false) && (slidePosition === 0 || index === 0)
            }
        })
    }

    return (
        <>
            <SliderContainer ref={sliderRef}>
                <SlideMain animate={playAnimation ? 1 : 0} direction={slideDirection}>
                    {(!video || slideNextPosition !== 0) && <SlideImage src={currentImage} />}
                    {video && <SlideVideo animate={playAnimation} autoPlay={true} loop={true} muted src={video}
                        style={{ visibility: slideNextPosition === 0 ? 'visible' : 'hidden' }} />}
                </SlideMain>

                <SlideOffset animate={playAnimation ? 1 : 0} direction={slideDirection}>
                    {
                        (!video || slidePosition !== 0) &&
                        (<SlideImage src={offsetImage} onLoad={() => {
                            if (isPrepared) {
                                dispatch({ type: "start" })
                            }
                        }} />)
                    }
                    {video && (
                        <SlideVideo autoPlay={false} style={{ visibility: slidePosition === 0 ? 'visible' : 'hidden' }} src={video} />)
                    }
                </SlideOffset>

                <SliderLeftButton onClick={() => handleSlideChangeButtonClick(SlideDirection.Left)}>
                    <LeftArrowImage src="./assets/left-arrow.svg" />
                </SliderLeftButton>
                <SliderRightButton onClick={() => handleSlideChangeButtonClick(SlideDirection.Right)}>
                    <RightArrowImage src="./assets/right-arrow.svg" />
                </SliderRightButton>
            </SliderContainer>
            <SliderBulletContainer>
                {
                    [...Array(slidesCount.current)].map((_, index) => {
                        return <SliderBullet key={index} isPicked={index === slidePosition}
                            onClick={() => handleSlideChange(index)}>index</SliderBullet>
                    })
                }
            </SliderBulletContainer>
        </>
    )

}

export default Slider;