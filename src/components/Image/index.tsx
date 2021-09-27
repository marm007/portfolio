import React from "react";
import { SlideDirection } from "../Slider/types";
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> { 
    direction?: SlideDirection;
    animate?: number;
}
const Image =  ({ ...props }: ImageProps) => {
    return <img alt={props.alt ?? ""} {...props} />
}

export default Image;