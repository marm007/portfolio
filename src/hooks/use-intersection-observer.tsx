import React from "react"

type IntersectionObserverProps = {
    target: React.RefObject<HTMLDivElement | HTMLVideoElement | HTMLImageElement | null>;
    onIntersect: IntersectionObserverCallback;
    threshold?: number;
    rootMargin?: string;

}

const useIntersectionObserver = ({ target, onIntersect, threshold = 0.1, rootMargin = '0px' }: IntersectionObserverProps) => {
    React.useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, { threshold, rootMargin })

        const current = target?.current;
        if (current) {
            observer.observe(current);

            return () => {
                observer.unobserve(current)
            }
        }
    })
}

export default useIntersectionObserver;