import { SliderActions, SliderState } from "./types"

export const sliderReducer = (state: SliderState, action: SliderActions) => {
    switch (action.type) {
        case 'prepare':
            return {
                ...state,
                offsetImage: action.data.offsetImage,
                slideDirection: action.data.slideDirection,
                slidePosition: action.data.slidePosition,
                isPrepared: true

            }
        case 'start':
            return {
                ...state,
                playAnimation: true
            }
        case 'end':
            return {
                ...state,
                playAnimation: false,
                isPrepared: false,
                currentImage: state.offsetImage,
            }
    }
}