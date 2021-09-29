import React, { useEffect, useRef } from 'react';
import useIntersectionObserver from '../../hooks/use-intersection-observer';

interface VideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    animate?: boolean;
}

const Video = ({ animate, ...props }: VideoProps) => {

    const videoRef = useRef<HTMLVideoElement | null>(null)

    useEffect(() => {
        if (animate && videoRef?.current) {
            videoRef.current.pause()
        }

        if(animate && props.style?.visibility === "hidden" && videoRef?.current) {
            videoRef.current.load()
        }
       
    }, [animate, props.style?.visibility])

    useIntersectionObserver({
        target: videoRef,
        onIntersect: ([{ isIntersecting }], observableElement) => {
            if (!animate && props.autoPlay && videoRef?.current)
                if (isIntersecting) {
                    videoRef.current.play()
                }
                else {
                    videoRef.current.pause()
                }

        }
    })
    return <video ref={videoRef} {...props} />
}

export default Video;