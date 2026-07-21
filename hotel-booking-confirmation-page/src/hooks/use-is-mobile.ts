import { useEffect, useState } from "react";

const MOBILE_WIDTH = 375;

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_WIDTH);

    useEffect(() => {
        function resize() {
            setIsMobile(window.innerWidth <= MOBILE_WIDTH);
        }

        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        }
    }, []);

    return {
        isMobile
    }
}

export default useIsMobile;