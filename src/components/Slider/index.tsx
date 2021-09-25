import React, { useEffect, useReducer, useRef } from "react";
import { sliderReducer } from "./reducer";
import { SliderBullet, SliderBulletContainer, SliderContainer, SliderDim, SliderImage, SliderOffsetImage } from "./styled";
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
            console.log("ENDNANDNAD")
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
                    slideDirection: (change < 0 ? SlideDirection.Left : SlideDirection.Right)
                }
            })
        }
    }

    return <SliderContainer ref={sliderRef}>
        <SliderImage animate={false} src={currentImage} />
        <SliderOffsetImage animate={playAnimation} direction={slideDirection}
            src={offsetImage} onLoad={() => {
                if (isPrepared) {
                    console.log("LOADED")
                    dispatch({
                        type: "start"
                    })
                }
            }} />
        <SliderDim />

     {/*    <SliderBulletContainer>
            {
                [...photos].map((_, index) => {
                    //console.log(`${index} - ${sliderPosition}`, index === sliderPosition)
                    return <SliderBullet key={index} isPicked={index === slidePosition}
                        onClick={() => handleImageChange(index)}>index</SliderBullet>
                })
            }
        </SliderBulletContainer> */}
    </SliderContainer>
}

export default Slider;