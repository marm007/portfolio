export enum SlideDirection {
    Left,
    Right
}

export type SliderState = {
    isPrepared: boolean;
    playAnimation: boolean;
    currentImage: string;
    offsetImage: string;
    slidePosition: number;
    slideDirection: SlideDirection;
}

export type SliderActions =
    | {
        type: 'prepare', data: {
            offsetImage: string,
            slidePosition: number,
            slideDirection: SlideDirection,
        }
    }
    | { type: 'start' }
    | { type: 'end' };

export type SliderProps = {
    photos: string[]
}

export interface SliderBulletProps {
    onClick: object;
    isPicked: boolean;
}

export interface SliderImageProps {
    src: any;
    animate?: boolean;
    direction?: SlideDirection;
}
