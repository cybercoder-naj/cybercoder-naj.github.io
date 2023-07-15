import { useEffect, useState } from "react";

export interface WindowSize {
    width?: number
    height?: number
}

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined
    })

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize);

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize;
}