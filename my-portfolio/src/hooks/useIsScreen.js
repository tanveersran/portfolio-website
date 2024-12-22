import { useState, useEffect } from "react";

const useIsLgScreen = () => {
    const [isLgScreen, setIsLgScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLgScreen(window.innerWidth >= 1024);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isLgScreen;
};

export default useIsLgScreen;