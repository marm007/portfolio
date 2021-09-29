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
    slideNextPosition: number;
    slideDirection: SlideDirection;
}

export type SliderActions =
    | {
        type: 'prepare', data: {
            offsetImage: string,
            slidePosition: number,
            slideDirection: SlideDirection,
            playAnimation: boolean,
        }
    }
    | { type: 'start' }
    | { type: 'end' };

export type SliderProps = {
    photos: string[],
    video?: string;
}

export interface SliderBulletProps {
    onClick: object;
    isPicked: boolean;
}

export interface SliderImageProps {
    src: any;
    animate?: number;
    direction?: SlideDirection;
}

export interface SliderButtonProps {
    onClick: object;
}

export type ImageLoadFunction = () => void;