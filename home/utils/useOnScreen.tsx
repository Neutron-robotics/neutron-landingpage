import { MutableRefObject, useEffect, useState } from "react";

function useOnScreen<T extends Element>(ref: MutableRefObject<T>, rootMargin: string = "0px"): boolean {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current)
                observer.unobserve(ref.current);
        };
    }, [rootMargin]);
    return isIntersecting;
}

export default useOnScreen