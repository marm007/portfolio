import React from "react";
import { SlideDirection } from "./types";
interface DivProps extends React.DetailsHTMLAttributes<HTMLDivElement> {
    direction?: SlideDirection;
    animate?: number;
}
const Slide = ({ children, ...props }: DivProps) => {
    return <div {...props} >
        {children}
    </div>
}

export default Slide;