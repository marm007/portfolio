import React, { useRef, useState } from "react";
import useIntersectionObserver from "../../hooks/use-intersection-observer";

type IntersectionContainerProps = {
    children: HTMLVideoElement | HTMLImageElement
}

const IntersectionContainer = ({ children }: IntersectionContainerProps) => {
    const ref = useRef<HTMLDivElement | null>(null)

    const isImage = useRef<boolean>(children instanceof HTMLImageElement);

    const [isVisible, setIsVisible] = useState(false);

    useIntersectionObserver({
        target: ref,
        onIntersect: ([{ isIntersecting }], observableElement) => {
            if (isIntersecting) {
                setIsVisible(true);

                if (isImage.current) {
                    if (ref?.current)
                        observableElement.unobserve(ref.current)
                }

            }
        }
    })

    return (
        <div>
            {children}
        </div>
    )
}

export default IntersectionContainer;